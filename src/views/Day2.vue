<template>
  <div class="max-w-max space-y-6 shadow-lg bg-white rounded-lg p-6">
    <h1 class="text-2xl text-center font-semibold">Day2 Challenge</h1>
    <p class="text-lg"><span class=" font-medium">Question:</span> Write code to say “hello, world!” in any language of
      your choosing.</p>

    <div class="p-2 rounded-lg flex mx-auto bg-neutral-100 text-center items-center space-x-2 shadow-sm max-w-max">
      <button :class="{ 'bg-white': active == 'leetcode' }" @click="changeVal('leetcode')"
        class="w-24 py-2 rounded-lg">Leetcode</button>
      <button :class="{ 'bg-white': active == 'code' }" @click="changeVal('code')"
        class="w-24 py-2 rounded-lg">Code</button>
    </div>

    <div v-if="active == 'leetcode'" class="w-full">
      <img src="/images/valid.png" alt="Bowofade Oyerinde solved Valid parentheses on leetcode" class="h-52 mx-auto">
    </div>
    <pre v-if="active == 'code'">
      <code class="language-javascript">
  // code here for example
  var isValid = (s) => {
  let stck = [];
  let closeToOpen = { ")": "(", "}": "{", "]": "[" };
  for (let i = 0; i &lt s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stck.push(s[i]);
    } else if (stck[stck.length - 1] === closeToOpen[s[i]]) {
      stck.pop();
    } else {
      return false;
    }
  }
  return stck.length == 0;
} 
</code>
</pre>
  </div>
</template>
<script>
import Prism from "prismjs";
// import Prism from "prismjs/components/prism-python.js";
import "prismjs/themes/prism.css";
export default {
  data() {
    return {
      active: "code"
    }
  },
  methods: {
    changeVal(value) {
      this.active = value;
    }
  },

  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
  }
};
</script>