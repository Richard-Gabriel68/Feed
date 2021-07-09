Vue.component('postagem', {
    data: function(){
        return {
            n: 10,
            commentList: ['Incrivel!', 'Ual'],
            comentario: '',
            comentar: false
        }
    },
    methods: {
        add: function(){
            this.commentList.push(this.comentario)
            this.comentario = ''
            this.comentar = false
        },
        openComment: function(){
            this.comentar = true
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
                <i class="far fa-comment" @click="openComment"></i>
            </div>
        </div>
        <div class="comments-area">
            <ul>
                <li v-for="item in commentList">
                    {{ item }}
                </li>
            </ul>
            <input type="text" placeholder="Adicione um comentario" v-model="comentario" @keyup.enter="add" v-if="comentar">
        </div>
    </div>
    `
})







let appFeed = new Vue ({
    el:'#app-feed',
    data: {
        
    },
    methods: {
        
    }

})
