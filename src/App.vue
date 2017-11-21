<template>
    <div>
        <h1>{{ title }}</h1>
        <input type="text" v-model="newItem" v-on:keyup.enter="addItem">
        <ul>
            <li v-for="(item,index) in items" v-bind:class="[liclass,{blue:item.isblue}]" v-on:click="change(item)">{{index+1}}、{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
import Store from './store';
export default {
    data() {
        return {
            title: "this is todolist!",
            items: Store.fetch(),
            liclass: "isliclass",
            newItem: ""
        }
    },
    watch: {
        items: {
            handler: function(items) {
                Store.save(items);
            },
            deep: true
        }
    },
    methods: {
        change: function(item) {
            item.isblue = !item.isblue;
            // item.isblue = item.isblue ? false : true; 
        },
        addItem: function() {
            this.items.push({ name: this.newItem, isblue: false });
            this.newItem = "";
        }
    }
}

</script>

<style scoped>
li {
    list-style: none;
    cursor: pointer
}

.blue {
    color: blue;
    text-decoration: underline
}
</style>