<template>
    <v-app>
        <v-app-bar 
            dense 
            app 
            color="primary" 
            dark
        >
            <v-toolbar-title class="subtitle-1">走穿-游戏攻略收集</v-toolbar-title>
        </v-app-bar>

        <v-btn
            fixed
            fab
            bottom
            right
            color="primary"
            @click="sheet = !sheet"
        >
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-bottom-sheet v-model="sheet">
            <v-sheet height="150px">
                <v-row justify="center">
                    <v-col cols="8">
                        <v-text-field 
                            v-model="search"
                            label="搜索"
                            clearable
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-bottom-sheet>

        <v-main>
            <v-container fluid>
                <v-row v-show="getFilterList.length > 0">
                    <v-col 
                        v-for="item in getFilterList"
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
                                <p class="mb-1">游戏名：{{ `${item.cn} ${item.en}` }}</p>
                                <p class="mb-1">作者：{{ item.author }}</p>
                                <p class="mb-1">来源：{{ item.source }}</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-show="getFilterList.length === 0" align="center" justify="center">
                    <v-col cols="12" class="text-center">未找到相关的内容</v-col>
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
        list: [...WALK_THROUGH],
        search: '',
        sheet: false
    }),

    computed: {
        getFilterList() {
            const {search, list} = this;
            if (search) {
                return list.filter(item => item.cn.match(search) || item.en.match(search));
            }
            return list;
        }
    },
};
</script>

<style>
.v-image {
    background-color: #333;
}
</style>