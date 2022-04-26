<template lang="">
  <div>
    <h1>test 1</h1>
    <h1>Eka Jaya Nagara - nawa data solution - vuejs</h1>
    <input placeholder="input your Family" v-model="isFamily" />
    <input placeholder="input your member" v-model="isMember" />
    <button v-on:click="main()">check</button>
    <p>output</p>
    <p>{{ result }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: "",
    };
  },
  methods:{
checkbus(family = 5, member = []) {
    if (family == member.length) {
      member.sort();
      let max_familily = 4;

     

      // init box
      let random_bus = [];
      let max_bus = [];

      for (let index = 0; index < member.length; index++) {
        if (member[index] == max_familily) {
          max_bus.push(member[index]);
          continue;
        } else if (member[index] <= max_familily) {
          random_bus.push(member[index]);
        }
      }

      //  console.log(random_bus);
      // console.log(max_bus);

      let sum_b = 0;
      random_bus.forEach((e) => {
        sum_b += e;
      });

      let a = sum_b / 4;
      let b = max_bus.length;

      this.$data.result = "Minimum bus required is : " + Math.ceil(a+b);
      console.log("Minimum bus required is : " + Math.ceil(a + b));
    } else {
      this.$data.result = "Input must be equal with count of family";
      console.log("Input must be equal with count of family");
    }
  },
  main() {
    // alert(1);
    let family = this.isFamily;
    let member = this.isMember;

    // conver string to array
    member = member.toLocaleLowerCase();
    member = member.replace(/\s/g, "");
    member = member.split("");
    // convert to number
    member = member.map((i) => Number(i));

    this.checkbus(family, member);
  },
  }
  
};
</script>
<style lang="scope"></style>
