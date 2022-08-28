<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> UpBuddle </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-white"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
              :to="menuItem.routerV"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page class="flex justify-center row">
        <div class="q-pa-md row col-12 flex justify-center">
          <div
            class="q-gutter-y-md row col-12 flex justify-center"
            style="max-width: 1200px"
          >
            <router-view />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

const menuList = [
  {
    icon: "map",
    label: "Spaces",
    routerV: "/spaces/",
    separator: false,
  },
  {
    icon: "mail",
    label: "Inbox",
    routerV: "/inbox",
    separator: false,
  },
  {
    icon: "person",
    label: "Profile",
    routerV: "/profile",
    separator: true,
  },
  {
    icon: "money",
    label: "Get credits",
    routerV: "/credits",
    separator: false,
  },
  {
    icon: "settings",
    label: "Settings",
    routerV: "/settings",
    separator: false,
  },
  {
    icon: "feedback",
    label: "Send Feedback",
    routerV: "/feedback",
    separator: false,
  },
  {
    icon: "help",
    iconColor: "primary",
    label: "Help",
    routerV: "/help",
    separator: false,
  },
];

export default {
  setup() {
    return {
      drawer: ref(false),
      menuList,
    };
  },
};
</script>
