<template>
  <div class="hello">
    <input type="text" name="title" v-model="post.title">
    <textarea name="content" id="summernote"></textarea>
    <input type="file" name="image" @change="onFileChange">
    <button @click="send">작성하기</button>
  </div>
</template>
  
  <script>
  import axios from 'axios';

  export default {
    methods: {
      onFileChange(event){
        this.image = event.target.files[0];
      },
      async send() {
        this.post.content = window.$('#summernote').summernote('code')
        const formData = new FormData();
        const jsonBlob = new Blob([JSON.stringify(this.post)], { type: 'application/json' })
        formData.append('dto', jsonBlob);
        formData.append('file', this.image);
        await axios.post("http://localhost:8080/api/v1/post/create", formData, { headers: { 'Content-Type': 'multipart/form-data'} });
      },
    },
    data() {
      return {
         post: {
          title: "",
          content:"",
          images: []
         },
         image: null
      }
    },
    name: 'WYSIWYGComponent',
    props: {
      msg: String
    },   

    mounted() {
    const self = this;
    this.$loadScript("https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js")
      .then(() => {
        window.$('#summernote').summernote({
          placeholder: '메시지를 입력해주세요',
          tabsize: 2,
          height: 80,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview', 'help']]
          ],
          callbacks: {
            onImageUpload: async function (files) {      
              const formData = new FormData();
              for(let i = 0; i < files.length; i++){
                formData.append('files', files[i]);
              }
              let response = await axios.post("http://localhost:8080/api/v1/post/upload-image", formData, {headers: { 'Content-Type': 'multipart/form-data' } });
              console.log(response.data);
              if (Array.isArray(response.data)) {
                response.data.forEach(url => {
                console.log(url);
                self.post.images.push(url);
                let imgTag = window.$("<img>").attr('src', url);
                window.$("#summernote").summernote("insertNode", imgTag[0]);
              });}    
            }
          }
        });
      })
      .catch(() => {
        console.log('summernote error');
      });
  },

}
</script>
  
  <style scoped></style>
  