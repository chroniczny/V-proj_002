<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                <!--<app-quote>-->
                    <!--<h2 slot="title">{{ quoteTitle }}</h2> &lt;!&ndash; attribute for slot with name to which will be rendered &ndash;&gt;-->
                    <!--<p>A wonderful Quote</p> &lt;!&ndash; unnamed goes to default slot !!! &ndash;&gt;-->
                <!--</app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './communication2/components/Quote.vue';
    import Author from './communication2/components/Author.vue';
    import New from './communication2/components/New.vue';

    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
