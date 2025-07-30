import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
    state: () => ({
        name: '',
        spots: 0,
        members: []
    }),

    actions: {
        async fill() {
            // const response = await import('@/data/team.json');
            // const data = response.default;

            // Option 1: Update state properties individually
            // this.name = data.name;
            // this.spots = data.spots;
            // this.members = data.members;

            // Option 2: Use $patch to update multiple properties at once
            // this.$patch({
            //   name: data.name,
            //   spots: data.spots,
            //   members: data.members,
            // });

            // Option 3: Replace the entire state object
            // this.$state = data;
            // or use below for synchronous
            // import().then(response => { ... })
            let response = await import('@/team.json');

            this.$state = response.default;
        },

        grow(spots) {
            this.spots = spots;
        }
    },

    // computed properties
    getters: {
        spotsRemaining() {
            return this.spots - this.members.length;
        }
    }

});