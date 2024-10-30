<template>
    <div class="aside">
        <div>
            <h2 class="aside-title">BEST</h2>
            <ul>
                <li>
                    <a class="aside-link selected" href="#"> 여성의류 </a>
                </li>
                <li>
                    <a class="aside-link" href="#">여성가방</a>
                </li>
                <li>
                    <a class="aside-link" href="#">여성신발</a>
                </li>
                <li>
                    <a class="aside-link" href="#">여성액세서리</a>
                </li>
                <li>
                    <a class="aside-link" href="#">남성의류</a>
                </li>
                <li>
                    <a class="aside-link" href="#">남성가방</a>
                </li>
                <li>
                    <a class="aside-link" href="#">남성신발</a>
                </li>
                <li>
                    <a class="aside-link" href="#">남성액세서리</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AsideComponent",
    data() {
        return { message: "test" }
    }
}

</script>

<style scoped>
.aside {
    width: 200px;
    padding-right: 80px;
}

.aside-title {
    width: 200px;
    padding-bottom: 12px;
    border-bottom: 4px solid #000000;
    font-size: 23px;
    font-weight: 800;
    line-height: 1.25;
}

.aside-link {
    display: block;
    width: 100%;
    line-height: 2.13;
    font-size: 16px;
    color: rgb(93, 93, 93);
    text-align: left;
    outline: none;
    font-weight: 200;
}

.aside-link.selected {
    color: rgb(0, 0, 0);
    font-weight: 700;
}
</style>