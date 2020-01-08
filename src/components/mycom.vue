<template>
    <div class="box">
        <div>
            {{ name + '的年龄' + myage }}
            <p>有一个{{ num }}岁的哥哥</p>
        </div>
        <div>
            <button @click="changeAge">点击改变年龄</button>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class mycom extends Vue {
    @Prop({default: 'jack'}) name!: string;
    @Prop({default: 23}) age!: number;
    get num() {
        return this.myage + 4;
    }
    myname: string = this.name;
    myage: number = this.age;
    changeAge(): void {
        this.myage = Math.floor(Math.random() * 100);
        this.$emit('pass', this.myname + this.myage);
    }
}
</script>

<style lang="scss">
.box {
    color: red;
}
</style>
