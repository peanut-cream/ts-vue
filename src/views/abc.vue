<template>
    <div>
        我是abc组件
        <p>{{ getvalue }}</p>
        <mycom :name="jim" :age="age" @pass="got"></mycom>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import mycom from '../components/mycom.vue';
@Component({
    components: {
        mycom,
    },
})
export default class abc extends Vue {
    jim: string = 'jack';
    age: number = 11;
    getvalue: any = '';
    got(name: any) {
        this.getvalue = name;
    }
}
</script>
