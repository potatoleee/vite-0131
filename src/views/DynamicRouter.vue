<template>
    <div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    created() {
        console.log(this.$route.params.id);
        const seed = "324d3b0df55e1cc3";
        axios.get(`https://randomuser.me/api/?seed=${seed}`)
            .then((res) => {
                console.log(res);
            })
    }
}
</script>