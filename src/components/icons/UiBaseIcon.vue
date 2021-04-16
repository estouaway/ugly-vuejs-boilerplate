<template>
  <span class="ui-icon-base component" v-bind="$attrs">
    <component :is="iconName" :width="width" :height="height" :color="color">
    </component>
  </span>
</template>

<script>
import write from "./write";
import arrowRight from "./arrowRight";
import done from "./done";
import arrowDown from "./arrowDown";
export default {
  name: "UiIconBase",
  props: {
    iconName: {
      type: String,
      default: "arrowRight",
    },
    width: {
      type: String,
      default: "18px",
    },
    height: {
      type: String,
      default: "18px",
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
  components: {
    write,
    arrowRight,
    done,
    arrowDown,
  },
};
</script>

<style lang="scss" scoped>
.ui-icon-base.component {
  display: inline-block;
}
</style>