<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title>WalkThrough</v-toolbar-title>
        </v-app-bar>

        <v-btn
            fixed
            fab
            bottom
            right
            color="primary"
        >
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-main>
            <v-container fluid>
                
                <v-row>
                    <v-col 
                        v-for="item in list"
                        :key="item.en"
                        cols="12"
                        sm="6" 
                        md="3"
                    >
                        <v-card
                            :href="item.link"
                            target="blank"
                        >
                            <v-img
                                class="white--text align-end"
                                height="150px"
                                :src="item.cover"
                            >
                                <v-card-title class="subtitle-1">{{ item.cn }}</v-card-title>
                            </v-img>
                            <v-card-text>
                                <p class="mb-1">作者：{{ item.author }}</p>
                                <p class="mb-1">来源：{{ item.source }}</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { WALK_THROUGH } from './mock';

export default {
    name: 'App',

    data: () => ({
        list: WALK_THROUGH
    }),
};
</script>

<style>
.app-main {
    position: relative;
    padding-bottom: 30px;
}
</style>