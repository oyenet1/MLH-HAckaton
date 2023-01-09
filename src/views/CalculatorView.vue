<template>
  <div class="max-w-max p-4 lg:px-0">
    <div
      class="
        relative
        mx-auto
        rounded-2xl
        w-72
        shadow-xl shadow-neutral-400
        bg-white
        p-2
      "
    >
      <div
        class="
          relative
          inset-0
          h-full
          bg-neutral-100
          shadow shadow-neutral-50
          p-4
          rounded-lg
          space-y-6
        "
      >
        <div
          class="
            absolute
            top-0
            right-1/4
            w-1/2
            bg-white
            mx-auto
            rounded-b-3xl
            h-5
          "
        >
          <p class="mx-auto bg-neutral-100 w-8 rounded-full h-[5px]"></p>
        </div>
        <div class="w-full mt-8 h-[70px] p-2 text-right rounded-md screen">
          <!-- opration -->
          <span class="text-sm text-neutral-300">54 * 76</span>
          <!-- answer -->
          <p class="digital tracking-wider text-3xl text-neutral-400">
            134,567
          </p>
        </div>

        <!-- setting button -->
        <div class="flex justify-between items-center">
          <div class="space-x-4 flex">
            <span
              @click="redo()"
              class="
                p-2
                rounded-full
                bg-neutral-50
                inner
                duration-300
                transition
              "
            >
              <span v-html="redo"></span>
            </span>
            <span
              class="
                p-2
                rounded-full
                bg-neutral-50
                inner
                duration-300
                transition
              "
            >
              <span v-html="calculator"></span>
            </span>
            <span
              class="
                p-2
                rounded-full
                bg-neutral-50
                inner
                duration-300
                transition
              "
              v-html="setting"
            >
            </span>
          </div>
          <span
            @click="onOff()"
            class="p-2 rounded-full bg-neutral-50 inner duration-300 transition"
            v-html="off"
          ></span>
        </div>

        <!-- button -->
        <div class="grid grid-cols-4 gap-6 text-center">
          <p
            class="
              rounded-lg
              bg-red-600
              text-white
              shadow-md
              cursor-pointer
              button
              duration-300
              transition
              hover:scale-90
            "
            @click="cancel()"
          >
            C
          </p>
          <p
            class="
              rounded-lg
              text-white
              bg-blue-600
              shadow-md
              cursor-pointer
              button
              duration-300
              transition
              hover:scale-90
            "
            @click="negate()"
          >
            <span>&sup1;</span>
            <span class="text-sm">&#8725;</span>
            <span class="text-[10px] pt-1">2</span>
          </p>
          <p
            class="
              rounded-lg
              text-white
              bg-blue-600
              shadow-md
              cursor-pointer
              button
              duration-300
              transition
              hover:scale-90
            "
            @click="opt('%')"
            x-text="percent"
          >
            &#37;
          </p>
          <p
            class="
              rounded-full
              text-white
              bg-green-700
              text-xl
              shadow-md
              cursor-pointer
              button
              duration-300
              transition
              hover:scale-90
            "
            @click="opt('/')"
          >
            &divide;
          </p>
          <p
            class="rounded-lg text-xl outside cursor-pointer button"
            @click="setVal(7)"
          >
            7
          </p>
          <p
            class="rounded-lg text-xl outside cursor-pointer button"
            @click="setVal(8)"
          >
            8
          </p>
          <p
            class="rounded-lg text-xl outside cursor-pointer button"
            @click="setVal(9)"
          >
            9
          </p>
          <p
            class="
              rounded-full
              text-white
              bg-green-700
              text-xl
              shadow-md
              cursor-pointer
              button
              duration-300
              transition
              hover:scale-90
            "
            @click="opt('*')"
          >
            &times;
          </p>
          <p
            class="rounded-lg text-xl outside cursor-pointer button"
            @click="setVal(4)"
          >
            4
          </p>
          <p
            class="rounded-lg text-xl outside cursor-pointer button"
            @click="setVal(5)"
          >
            5
          </p>
          <p
            class="rounded-lg text-xl outside cursor-pointer button"
            @click="setVal(6)"
          >
            6
          </p>
          <p
            class="
              rounded-full
              text-white
              bg-green-700
              text-xl
              shadow-md
              cursor-pointer
              button
              duration-300
              transition
              hover:scale-90
            "
            @click="opt('-')"
          >
            &minus;
          </p>
          <p
            class="rounded-lg text-xl outside cursor-pointer button"
            @click="setVal(1)"
          >
            1
          </p>
          <p
            class="rounded-lg text-xl outside cursor-pointer button"
            @click="setVal(2)"
          >
            2
          </p>
          <p
            class="rounded-lg text-xl outside cursor-pointer button"
            @click="setVal(3)"
          >
            3
          </p>
          <p
            class="
              rounded-full
              aspect-square
              text-xl
              shadow-md
              cursor-pointer
              button
              duration-300
              transition
              hover:scale-90
              text-white
              bg-green-700
            "
            @click="opt('+')"
          >
            &plus;
          </p>
          <p
            class="
              rounded-lg
              col-span-2
              text-xl
              shadow-md
              cursor-pointer
              button
              duration-300
              transition
              hover:scale-90
            "
            @click="setVal(0)"
          >
            0
          </p>
          <p
            class="rounded-lg text-xl outside cursor-pointer button"
            @click="dot('.')"
          >
            .
          </p>
          <p
            class="
              rounded-full
              text-white
              bg-yellow-400
              text-xl
              shadow-md
              cursor-pointer
              button
              duration-300
              transition
              hover:scale-90
            "
            @click="opt('=')"
          >
            =
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@font-face {
  font-family: digital;
  src: url("/fonts/digital-7.ttf");
}

@font-face {
  font-family: tech;
  src: url("/fonts/Technology.ttf");
}
.digital {
  font-family: "digital";
}
.button {
  line-height: 45px;
}
.screen {
  box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2),
    0 3px 5px 0 rgba(255, 255, 255, 1);
}
.inner,
.outside:hover {
  box-shadow: inset 2px 3px 10px 0 rgba(50, 50, 50, 0.1),
    inset 3px 3px 7px 0 rgba(50, 50, 50, 0.1);
  cursor: pointer;
}
.inner:hover,
.outside {
  box-shadow: 2px 3px 10px 0 rgba(50, 50, 50, 0.2),
    2px 3px 7px 0 rgba(50, 50, 50, 0.2);
  cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      values: [],
      operator: null,
      percent: "&#37;",
      redo: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg>`,
      calculator: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
</svg>`,
      setting: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>`,
      off: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`,
    };
  },

  computed: {
    result() {
      if (this.operator == "+") {
        let result = this.values[0] - this.values[1];
        result = result.toFixed(2);
        return result.toLocaleString("en-US");
      }
      if (this.operator == "-") {
        let result = this.values[0] - this.values[1];
        result = result.toFixed(2);
        return result.toLocaleString("en-US");
      }
      if (this.operator == "*") {
        let result = this.values[0] - this.values[1];
        result = result.toFixed(2);
        return result.toLocaleString("en-US");
      }
      if (this.operator == "/") {
        let result = this.values[0] - this.values[1];
        result = result.toFixed(2);
        return result.toLocaleString("en-US");
      }
    },
  },
};
</script>