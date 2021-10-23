<template>
  <div class="container">   
    <div class="row">
      <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel cyan lighten-5 z-depth-1" style="height:90px;">
          <div class="row valign-wrapper">
            <div class="col s3 valign-wrapper">
               <a class="btn-floating btn-large waves-effect waves-light  light-blue lighten-5" id="link_pet" href="#">
              <img alt="" class="responsive-img" src="https://ppeah.com/files/2020/07/iStock-639868212.jpg"
               style="padding-top: 25%;"> <!-- notice the "circle" class -->
              </a>
            </div>
            <div class="col s9 valign-wrapper">
              <div class="col s3 offset-s11 m3 offset-m7">
                <a type="button" class="flow-text" id="link_profile" href="#" v-on:click="ale_example">
                {{nickname}}
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
 
   <div class="row">
        <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel cyan lighten-5 z-depth-1" style="height:70px;">
          <div class="row valign-wrapper">
            <div class="col s12 m12">
                <span class="flow-text" id="link_profile">
                {{now}}
                </span>
            </div>
          </div>
        </div>
      </div>
   </div>  
    <div class="row">
      <div class="col s12 m8 offset-m2 l6 offset-l3">
      <div class="card-panel cyan lighten-5 z-depth-1">
        <div class="row valign-wrapper">
        <div class="input-field col s12 m12 l12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1" id="label_textarea1">¿Qué hace 
            <span style="color: orange;">
              {{nickname}}
          </span> hoy?</label>
        </div>
        </div>
      </div>
    </div>
  </div> 
  <div class="row">
    <div class="col s12 m8 offset-m2 l6 offset-l3">
      <div class="card-panel cyan lighten-5 z-depth-1" style="height:100px;">
        <div class="row valign-wrapper">
        <div class="col s2">
          <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">image</i></a>
        </div>
        <div class="col s4">
          <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">ondemand_video</i></a>
        </div>
        <div class="col s3">
          <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">gif</i></a>
        </div>
        </div>
      </div>
    </div>
  </div> 
   <div class="row">
     <div class="col s12 m8 offset-m2 l6 offset-l3"> 
    <div class="card-panel cyan lighten-5 z-depth-1" style="height:70px;">
      
     <div style="position: relative; height:60px;">
          <div class="fixed-action-btn horizontal direction-top direction-right" style="position: absolute; display: inline-block; right: 24px;padding-right:80%;">
            <a class="btn-floating btn-large red">
              <i class="large material-icons">pets</i>
            </a>
            <ul>
              <li>
                <a class="btn-floating red">
                  <i class="material-icons">sentiment_dissatisfied</i>
                </a>
              </li>
              <li>
                <a class="btn-floating yellow darken-1">
                  <i class="material-icons">sentiment_neutral</i>
                </a>
              </li>
              <li>
                <a class="btn-floating green">
                  <i class="material-icons">sentiment_satisfied</i>
                </a>
              </li>
              <li>
                <a class="btn-floating blue">
                  <i class="material-icons">whatshot</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </div>
   </div>

     <div class="row">
          <div class="col s12 m8 offset-m2 l6 offset-l3"> 
            <div class="card-panel cyan lighten-5 z-depth-1">
            <div class="card-action">
              <a href="#"><span class="flow-text">Publicar</span></a>
            </div>
            </div>
            </div>
        </div>   
  </div>  

</template>

<script>
import M from 'materialize-css'
import Swal from 'sweetalert2'
export default {
  name: "Post",
  props: {
    msg: String,
    now: {
      type: String,
      default:function () { return new Date().toDateString() }
    },
    nickname: String,
  },
  mounted() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {
      direction: 'right'
    });
    var elems_sel = document.querySelectorAll('select');
     M.FormSelect.init(elems_sel);
    },
    methods: {
      ale_example: function(event) {
        console.log(event.target)
        Swal.fire('Any fool can use a computer')
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
</style>
