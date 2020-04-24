    <template>
        <div id="nav" class="nav">
            <router-link to="/">Vue birdwatch</router-link>

            <nav>
                <router-link class="nav-item" :to="{ name: 'bird-list' }">List</router-link> |
                <router-link class="nav-item" :to="{ name: 'bird-create' }">New sighting</router-link>
            </nav>
        </div>
    </template>
    
    <script>
        export default {
            
        }
    </script>
    
    <style lang="scss" scoped>
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .nav .nav-item {
            box-sizing: border-box;
            margin: 0 5px;
            color: rgba(0, 0, 0, 0.5);
            text-decoration: none;
        }
        .nav .nav-item.router-link-exact-active {
            color: #39b982;
            border-bottom: solid 2px #83c5be;
        }
    </style>