<template>
  <ion-header :translucent="true" style="height: 50px">
    <div>
      <div style="display: flex; justify-content: space-between">
        <div style="display: flex; margin-top: 8px">
          <ion-icon
            style="position: relative; top: 2px; left: 15px"
            size="large"
            color="primary"
            :icon="peopleCircle"
          ></ion-icon>
          <ion-title style="display: flex; font-size: 14px" color="tertiary">
            {{ userName }}
          </ion-title>
        </div>
        <div style="margin-top: 8px; position: relative; right: 15px">
          <ion-icon
            size="large"
            :icon="logOutOutline"
            @click="showConfirmModal"
          ></ion-icon>
        </div>
      </div>

      <div v-if="isModalOpen" class="overlay"></div>

      <div class="ShowModal" v-if="isModalOpen">
        <div
          class="wrapper"
          style="width: 300px; padding: 20px;"
        >
          <h5 style="margin-bottom: 20px; color: rgb(202, 130, 22)">
            Bạn có chắc muốn đăng xuất
          </h5>
            <div style="display: flex ; justify-content: space-between;">
              <div>
                <ion-button
                  color="primary"
                  style="width: 100px"
                  @click="isModalOpen = false"
                >
                  <ion-text style="font-size: 13px">Đóng</ion-text></ion-button
                >
              </div>
              <div>
                <ion-button color="medium" style="width: 100px" @click="logout">
                  <ion-text style="font-size: 13px">Đăng xuất</ion-text>
                </ion-button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </ion-header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import { IonHeader, IonToolbar } from "@ionic/vue";
import { peopleCircle, logOutOutline } from "ionicons/icons";

const userName = ref<string>("");
const isModalOpen = ref<boolean>(false);
onMounted(() => {
  userName.value = localStorage.getItem("userName") || "";
});

const showConfirmModal = () => {
  isModalOpen.value = true;
};

const logout = () => {
  window.location.href = "/";
};
</script>
<style>
.ShowModal {
  text-align: center;
  position: fixed;
  z-index: 1000;
  background-color: white;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 20px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
