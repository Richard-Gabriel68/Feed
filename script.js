Vue.component('postagem', {
    data: function(){
        return {
            n: 10
        }
    },
    methods: {
        responder: function(){
            this.$emit('responder', this.titulo)
        }
    },
    props: [ 'titulo' ],
    template: `
    <div class="template">
        <h1> {{ titulo }} </h1>
        <slot></slot>
        <div class="buttons-area">
            <small>
                <strong> {{ n }} curtidas </strong>
            </small>
            <div class="buttons">
                <i class="far fa-heart" @click="n++"></i>
                <i class="far fa-comment" @click="responder"></i>
            </div>
        </div>
        <hr/>
    </div>
    `
})



let app = new Vue ({
    el:'#app',
    data: {
        responderPost: false,
        nomePost: ''
    },
    methods:
    {
        abrirResposta: function(titulo){
            this.responderPost = true;
            this.nomePost = titulo
        }
    }
})