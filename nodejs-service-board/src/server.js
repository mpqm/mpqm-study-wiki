const express = require("express");
const hbs = require("express-handlebars");
const { ObjectId } = require("mongodb");
const crypto = require("./core/crypto")
const mongodbConnection = require("./core/mongodb-connection");
const postService = require("./core/post-service");
const path = require('path');

const app = express();
const port = 3000
const rootDir = path.resolve(process.cwd());
let collection;

// 서버 실행 및 MongoDB 연결
app.listen(port, async () => {
    console.log("Server started on", port);
    const mongoClient = await mongodbConnection();
    const db = mongoClient.db();

    // 'postCollection'이 존재하지 않으면 자동으로 생성
    collection = await db.createCollection("post").catch(() => {
        // 컬렉션이 이미 존재하는 경우 기존 컬렉션을 사용
        return db.collection("post");
    });
    console.log("Connected to 'postCollection' collection.");
});

// Handlebars를 뷰 엔진으로 설정
app.engine("hbs", hbs.create({ 
    defaultLayout: "main",
    layoutsDir: rootDir + "/view",
    helpers: require("./core/hbs-helpers"), }).engine);
app.set("view engine", "hbs");
app.set("views", rootDir + "/view");

// 정적파일, JSON, URL-encoded 데이터 파싱
app.use("/views/styles", express.static(rootDir + "/view/css"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 홈 페이지 요청 처리
app.get("/", async (req, res) => {
    const page = parseInt(req.query.page) || 1; // 페이지 번호 파라미터 또는 기본값 1
    const search = req.query.search || ""; // 검색어 파라미터 또는 빈 문자열
    try {
        const [posts, paginator] = await postService.list(collection, page, search);
        res.render("home", { search, paginator, posts });
    } catch (error) {
        console.error(error);
        res.render("home");
    }
});

// 게시글 작성 페이지 요청 처리
app.get("/write", (req, res) => { res.render("write", { mode: "create" }); });

// 게시글 작성 처리
app.post("/write", async (req, res) => {
    const post = req.body;
    try {
        encryptedPassword = await crypto.encryptPassword(post.password)
        const postWithEncryptedPassword = { ...post, password: encryptedPassword };
        const result = await postService.writePost(collection, postWithEncryptedPassword);
        res.redirect(`/detail/${result.insertedId}`);
    } catch (error) {
        console.log(error);
        res.render("home");
    }
});

// 게시글 상세 보기 페이지 요청 처리
app.get("/detail/:id", async (req, res) => {
    try {
        const result = await postService.getDetailPost(collection, req.params.id);
        if (!result) { res.render("home"); }
        res.render("detail", { post: result.value, });
    } catch (error) {
        console.log(error);
        res.render("home")
    }
});

// 패스워드 확인 처리
app.post("/check-password", async (req, res) => {
    const { id, password } = req.body;
    try {
        const post = await postService.getPostById(collection, id);
        const match = await crypto.comparePasswords(password, post.password)
        if (!match) { return res.status(404).json({ isExist: false }); }
        return res.json({ isExist: true });
    } catch (error) {
        console.log(error);
        res.render("home")
    }
});

// 게시글 수정 페이지 요청 처리
app.get("/modify/:id", async (req, res) => {
    const { id } = req.params.id;
    try {
        const post = await postService.getPostById(collection, req.params.id);
        if (!post) { return res.render("home") }
        res.render("write", { mode: "modify", post });
    } catch (error) {
        console.log(error);
        res.render("home")
    }
});

// 게시글 수정 처리
app.post("/modify/", async (req, res) => {
    const { id, title, writer, password, content } = req.body;
    try {
        const post = await postService.getPostById(collection, id);
        const match = await crypto.comparePasswords(password, post.password)
        if (!match) { return res.redirect(`/detail/${id}`); }
        const checkpost = {
            title,
            writer,
            password: post.password,
            content
        };
        const result = await postService.updatePost(collection, id, checkpost);
        res.redirect(`/detail/${id}`);
    } catch (error) {
        console.log(error)
        res.redirect(`/detail/${id}`);
    }
});

// 게시글 삭제 처리
app.delete("/delete", async (req, res) => {
    const { id, password } = req.body;
    try {
        const post = await postService.getPostById(collection, id);
        const match = await crypto.comparePasswords(password, post.password)
        if (!match) { res.status(404) }
        const result = await collection.deleteOne({ _id: new ObjectId(id), password: post.password, });
        if (result.deletedCount !== 1) {
            console.log("삭제실패");
            return res.json({ isSuccess: false });
        }
        return res.json({ isSuccess: true });
    } catch (error) {
        console.error(error);
        return res.json({ isSuccess: false });
    }
});

// 댓글 작성 처리
app.post("/write-comment", async (req, res) => {
    const { id, name, password, comment } = req.body;
    const encryptedPassword = await crypto.encryptPassword(password)
    const post = await postService.getPostById(collection, id);
    if (post.comments) {
        post.comments.push({
            idx: post.comments.length + 1,
            name,
            password: encryptedPassword,
            comment,
            createdDt: new Date().toISOString(),
        });
    } else {
        post.comments = [
            {
                idx: 1,
                name,
                password: encryptedPassword,
                comment,
                createdDt: new Date().toISOString(),
            },
        ];
    }
    postService.updatePost(collection, id, post);
    return res.redirect(`/detail/${id}`);
});

// 댓글 삭제 처리
app.delete("/delete-comment", async (req, res) => {
    const { id, idx, password } = req.body;
    try {
        const postbuf = await collection.findOne(
            {
                _id: new ObjectId(id),
                "comments.idx": parseInt(idx)
            },
            {
                projection: {
                    _id: 0,
                    "comments.$": 1
                }
            }
        );
        const comment = postbuf.comments.find(comment => comment.idx === parseInt(idx));
        const commentPassword = comment.password
        const match = await crypto.comparePasswords(password, commentPassword)
        if (!match) { return res.status(404) }
        const post = await collection.findOne(
            {
                _id: new ObjectId(id),
                comments: { $elemMatch: { idx: parseInt(idx), password: commentPassword } },
            },
        );
        if (!post) { return res.json({ isSuccess: false }); }
        post.comments = post.comments.filter((comment) => comment.idx != parseInt(idx));
        postService.updatePost(collection, id, post);
        return res.json({ isSuccess: true });
    } catch (error) {
        console.log(error);
        res.json({ isSuccess: false });
    }
});