<template>
  <div class="home page">
    <h1 v-if="msg != ''">
      <UiBaseIcon
        width="17px"
        height="17px"
        color="blue"
        @click="onClickIcon"
      />
      {{ msg }}
    </h1>
    <br /><br />
    <button @click="isShownModal = true">show modal</button>
    <button @click="showToast">show toast</button><br /><br /><br />
    <UiModal
      closeOnOverlay
      :show="isShownModal"
      v-on:update:show="isShownModal = $event"
    >
      <div class="some-modal-content">
        hi there
        <div class="buttons">
          <button @click="submitModalHandler">ok</button>
        </div>
      </div>
    </UiModal>

    <UiInputText
      v-model="msg"
      placeholder="Enter message"
      label="Enter message"
      someHelloProp="hello"
      @blur="onBlur"
      @keyup.enter="onEnter"
      @keyup.esc="onEsc"
      :error="inputError"
    >
      <template v-slot:before>
        <UiBaseIcon iconName="done" />
      </template>
      <template v-slot:after>
        <UiBaseIcon iconName="write" />
      </template>
      <template v-slot:bottom>This is very important description</template>
    </UiInputText>
    <br /><br /><br /><br />
    
    <div>
      <h1>{{ randomText }}</h1>
    </div>
    <div class="facts-data">
      <DataBox :loading="loading" :isEmpty="isEmpty" :error="error">
        <ul class="facts-list">
          <li class="item" v-for="item in facts" :key="item.id">
            {{ item.text }}
          </li>
        </ul>
      </DataBox>
    </div>
  </div>
</template>

<script>
import { MockService } from "@/services/mock.service";
import UiModal from "@/components/UiModal.vue";
import UiBaseIcon from "@/components/icons/UiBaseIcon.vue";
import UiInputText from "@/components/UiInputText.vue";

import DataBox from "../components/DataBox";

export default {
  name: "IndexPage",
  components: {
    UiModal,
    UiBaseIcon,
    UiInputText,
    DataBox,
  },
  data() {
    return {
      msg: "",
      randomText: "Random facts",
      facts: [],
      error: false,
      loading: false,
      isShownModal: false,
      inputError: false,
    };
  },
  methods: {
    showToast() {
      console.log("aaa");
      this.$store.commit("toast/NEW", { type: "success", message: "hello" });
    },
    submitModalHandler() {
      // some logic
      this.isShownModal = false;
    },
    onBlur() {
      console.log("onBlur!!!");
    },
    onEnter() {
      console.log("onEnter!!!");
    },
    onEsc() {
      console.log("onEsc!!!");
    },
    onClickIcon() {
      console.log("onClickIcon!!!!");
    },
    async fetchData() {
      this.loading = true;
      try {
        const { data } = await MockService.getRandomFacts();
        this.facts = data.data;
      } catch (e) {
        this.$store.commit("toast/NEW", {
          type: "error",
          message: e.message,
          e,
        });
        this.error = e.message;
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    isEmpty() {
      return this.facts && !this.facts.length;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.some-modal-content {
  min-width: 400px;
  padding: 25px;
  .buttons button {
    padding: 10px;
    margin: 10px;
  }
  .facts-list {
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }
}
</style>