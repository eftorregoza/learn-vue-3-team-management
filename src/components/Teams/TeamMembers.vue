<script setup>
import TeamMember from './TeamMember.vue';
import { useTeamStore } from '@/stores/TeamStore';

let team = useTeamStore();
</script>

<template>
    <table class="table-fixed border-spacing-2 border-separate">
        <thead>
            <tr>
                <th class="text-left px-6 py-2">Name</th>
                <th class="text-left px-6 py-2">Email</th>
                <th class="text-left px-6 py-2">Status</th>
            </tr>
        </thead>

        <tbody>
            <TeamMember v-for="member in team.members" :name="member.name" :email="member.email"
                :status="member.status" />
        </tbody>
    </table>

    <p class="text-right text-gray-600 italic" v-show="!team.spotsRemaining">There are no remaining team
        spots. Upgrade to add more.</p>
</template>