<template>
  <div>
  </div>
<ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="images/office.jpg">
      </div>
      <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

  <div class="container"> 
      
    <div class="row">
      <div class="col s1 red">1</div>
      <div class="col s1 blue">2</div>
      <div class="col s1 yellow">3</div>
      <div class="col s1">4</div>
      <div class="col s1">5</div>
      <div class="col s1">6</div>
      <div class="col s1">7</div>
      <div class="col s1">8</div>
      <div class="col s1">9</div>
      <div class="col s1">10</div>
      <div class="col s1">11</div>
      <div class="col s1">12</div>
    </div>
    <div class="row">
                <div class="input-field col s3">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
                </div>
       <div class="col s3 green">
            <nav>

                <div class="nav-wrapper">
                    <div class="input-field">
                    <input id="search" type="search" required>
                    <label class="label-icon " for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                    </div>
                </div>
            </nav>
      </div>       


     </div>          
    <div class="row">
    <div class="col s3"> 
     <span class="flow-text pepito">
        {{nickname}}
    </span>  
    </div>
     <div class="col s6">  
         <i class="material-icons">android</i>
    </div>
    </div>
    <div class="row">
     <span class="flow-text blue lighten-3">
        {{now}}
    </span>
    </div>
    <div class="row">
    <div class="input-field col s12">
        <textarea  class="materialize-textarea"></textarea>
    </div>
    </div>
    <div class="row red">
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large red">
                <i class="large material-icons">bubble_chart</i>
            </a>
            <ul>
                <li><a class="btn-floating puprle"><i class="material-icons">check</i></a></li>
                <li><a class="btn-floating yellow darken-1"><i class="material-icons">ondemand_video</i></a></li>
                <li><a class="btn-floating blue lighten-5"><i class="material-icons">gif</i></a></li>
            </ul>
        </div>
    </div>
    <div class="row">

        <div class="fixed-action-btn">
            <a class="btn-floating btn-large red">
                <i class="large material-icons">bubble_chart</i>
            </a>
            <ul>
                <li><a class="btn-floating red"><i class="material-icons">check</i></a></li>
                <li><a class="btn-floating yellow darken-1"><i class="material-icons">favorite</i></a></li>
                <li><a class="btn-floating blue lighten-5"><i class="material-icons">flare</i></a></li>
                <li><a class="btn-floating green"><i class="material-icons">grade</i></a></li>
            </ul>
        </div>
    </div>
    <div class="row">
    <div class="input-field col s3 red">
    <select >
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
    </div>
            <div class="col s3 offset-s6 yellow">    
            <button class="btn waves-effect waves-light purple darken-3" name="action">Publicar
            <i class="material-icons right">send</i>
            </button>
            </div>
    </div>
     <div class="row">
         <div class="col s6 offset-s4 green">  
         <img class="materialboxed" width="650" src="https://previews.123rf.com/images/pwg89/pwg891509/pwg89150900025/45306031-hojas-0peque%C3%B1as.jpg">
         </div>
     </div>    
  </div>


      
</template>

<script>
import M from 'materialize-css'
export default {
  name: "Post",
  props: {
    msg: String,
    now: new Date(),
    nickname: String,
  },
  mounted() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
    var elems_sel = document.querySelectorAll('select');
     M.FormSelect.init(elems_sel);
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
  color: #42b983;
}
.pepito {
color: #6242b9;
}

</style>
