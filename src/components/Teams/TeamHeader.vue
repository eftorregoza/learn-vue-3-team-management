<script setup>
import AddMemberModal from "./AddMemberModal.vue";

import { useTeamStore } from "@/stores/TeamStore";

let team = useTeamStore();
</script>

<template>
    <header class="flex justify-between">

        <AddMemberModal />

        <div>
            <div class="inline-flex items-center text-3xl relative">
                <!-- <img src="/smiley.png" alt="" class="mr-2"> -->
                <h3>{{ team.name }} Team</h3>
                <div
                    class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">
                    {{ team.spots }}</div>
            </div>
        </div>
    </header>
</template>
