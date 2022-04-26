<template lang="">
  <div>
    <h1>test 1</h1>
    <h1>Eka Jaya Nagara - nawa data solution - vuejs</h1>
    <input placeholder="input your text" v-model="isText" />
    <button v-on:click="main()">check</button>
    <p>Vowel Character</p>
    <p>{{ vocalString }}</p>
    <p>Consonant Character</p>
    <p>{{ consonantString }}</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      vocalString : "",
      consonantString : ""
    }
  },
  methods: {
    vocal(string = "") {
      string = string.toLocaleLowerCase();
      string = string.replace(" ", "");
      string = string.split("");
      let vocal = "aiueo";
      let result = [];

      string.forEach((value) => {
        if (vocal.includes(value)) {
          result.push(value);
        }
      });

      result.sort();
      let vocalString = result.join(" ");
      this.$data.vocalString = vocalString
      console.log("Vowel Character:");
      console.log(result.join(" "));
      // alert(string);
    },
    consonant(string = "") {
      string = string.toLocaleLowerCase();
      string = string.replace(" ", "");
      string = string.split("");
      let vocal = "aiueo";
      let result = [];

      string.forEach((value) => {
        if (!vocal.includes(value)) {
          result.push(value);
        }
      });

      result.sort().reverse();
      let consonantString = result.join(" ");
      this.$data.consonantString = consonantString;

      console.log("consonant Character:");
      console.log(result.join(" "));
    },
    main() {
      let string = this.isText;
      this.vocal(string);
      this.consonant(string);
    },
  },
};
</script>
<style lang="scope"></style>
