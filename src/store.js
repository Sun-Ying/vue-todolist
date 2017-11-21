const store_key = 'todolist-vue.js';
export default {
    fetch: function () {
        return JSON.parse(window.localStorage.getItem(store_key) || '[]');
    },
    save: function (items) {
        window.localStorage.setItem(store_key, JSON.stringify(items));
    }
}

