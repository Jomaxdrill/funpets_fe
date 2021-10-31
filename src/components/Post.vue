<template>
<div class="post">
  <div class="container">
    <div class="card-panel white z-depth-1 shadow_box ">
      <form v-on:submit.prevent="publish_post" id="creation_post">
      <div class="row">
             <div class="col s3 offset-s1 m3 offset-m1 l3 offset-l1 valign-wrapper">
               <a class="btn-floating btn-large waves-effect waves-light  white" id="link_pet" href="javascript:void(0);">
              <img  class="circle responsive-img" alt="" v-bind:src="url_pet"
               style="padding-top: 23%;"> <!-- notice the "circle" class -->
              </a>
            </div>           
         <div class="col s7 m7 l7 valign-wrapper">
            <div class="col s3 offset-s9 m3 offset-m7">
                <a type="button" class="flow-text" id="link_profile" href="javascript:void(0);">
                  <div style="margin-top:20px;">{{nickname}}</div>
                </a>
            </div>
         </div>
      </div>
      <div class="row">
        <div class="col s12 m8 offset-m2 l6 offset-l3">
            <div class="col s12 m12">
                <span class="flow-text" id="date_post">
                {{now}}
                </span>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 m12 l12">
          <textarea v-model="text_post" id="textarea1" class="materialize-textarea">
          </textarea>
          <label for="textarea1" id="label_textarea1">
            <span style="color: orange;">
              {{msg_post}}
          </span></label>
        </div>
      </div>
      <div class="row">
          <div class="col s4 m4 l4 ">   
            <div class="file-field input-field col s6 offset-s2 l6 offset-l3">
                <div class="btn btn-large waves-effect waves-light orange ">
                    <i class="material-icons">image</i>
                    <input type="file" v-on:click="showPreview" accept="image/*">
                </div>
            </div>

        </div>
        <div class="col s4 m4 l4 ">
            <div class="file-field input-field col s6 offset-s2 l6 offset-l3">
                <div class="btn btn-large waves-effect waves-light orange ">
                    <i class="material-icons ">videocam</i>
                    <input type="file" v-on:click="showPreview" accept="image/*">
                </div>
            </div>
        </div>
        <div class="col s4 m4 l4 ">
                        <div class="file-field input-field col s6 offset-s2 l6 offset-l3">
                <div class="btn btn-large waves-effect waves-light orange ">
                    <i class="material-icons valign-wrapper">gif</i>
                    <input type="file" v-on:click="showPreview" accept="image/*">
                </div>
            </div>
        </div>
        
      </div>
      <div class="row">
        <div class="col s12 m8 offset-m2 l6 offset-l3"> 
                <div class="card-action">
                    <button class="btn btn-large waves-effect waves-light orange"
                     type="submit"><span class="flow-text" >Publicar</span></button>
                </div>
            </div>
        </div>
        <a id="pass_post" href="javascript:void(0);" @click="send_post" style="display:none;"></a>
      </form> 
      </div> 
  </div>  
</div>
 
</template>

<script>
import M from 'materialize-css'
import Swal from 'sweetalert2'
import moment from 'moment'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
export default {
  name: "Post",
  props: {
    msg: String,
    now: {
      type: String,
      default:function () { 
          let date_now=new Date();
          return new moment(date_now).format("YYYY-MM-DD"); }
    },
    nickname: String,
    url_pet:{ 
      type:String,
    default:"https://static-00.iconduck.com/assets.00/pets-icon-512x487-dmsvdjpw.png"
    },
    msg_post: String,
    account_id: String,
  

  },
    data() {
    return {
      error_msg: "",
      text_post: "",
      new_post:{},
    };
  },
  mounted() {
 /**     var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {
      direction: 'right'
    }); */
    var elems_sel = document.querySelectorAll('select');
     M.FormSelect.init(elems_sel);
    },
    methods: {
      publish_post: function() {
        let post_info={
          
        post_account_id: this.account_id,
        post_typepost_id: "2",
        post_text:this.text_post

        }
    let headers_post= {
    headers: {
      'Authorization': 'Bearer ' + localStorage.access
    }
 }
    let pk_user_id=jwtDecode(localStorage.access).user_id
        console.log(post_info)
        console.log(pk_user_id)
        axios.post(`http://127.0.0.1:8000/post/${pk_user_id}/`,post_info,headers_post).then((result) => {
          console.log("el resultado es del post id");
            console.log(result);
            this.new_post.post_id=result.data['created record']
            this.new_post.post_account_id=this.account_id
            this.new_post.post_text=this.text_post
            this.new_post.post_creation_date=moment().format("YYYY-MM-DD")
            this.new_post.pet_nickname=this.nickname
            this.new_post.pet_image=this.url_pet
        Swal.fire({
          title: 'Post creado',
          confirmButtonColor: '#ff9800',
        }).then((result_conf) => {
          if (result_conf.isConfirmed) {
            //refrescar la pagina
            document.getElementById("textarea1").value=""
            document.getElementById("pass_post").click()
            
          }
        })
      }).catch(error => {
            console.error('There was an error!', error);
        });
      },
      showPreview: function(event){
        if(event.target.files.length > 0){
          var src = URL.createObjectURL(event.target.files[0]);
          var preview = document.getElementById("image_preview");
          preview.src = src;
          preview.style.display = "block";
        }
      },
      send_post(){
        console.log(this.new_post)
        this.$emit('click',this.new_post)
      }

    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #006064;
  font-family: 'Architects Daughter', cursive;
}
.bor_style{
  border-radius: 35px;
  border-style: dotted;
}

span{
  font-family: 'Architects Daughter', cursive;
}

a {
  font-family: 'Architects Daughter', cursive;
  color: #2C3E50;
}
.shadow_box{
  box-shadow: 2px 2px 2px 1px black;
}
</style>
