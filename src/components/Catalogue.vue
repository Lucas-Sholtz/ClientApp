<template>
    <h1>Catalogue</h1>
    <button v-on:click="postRequest()">Get Categories</button>
    <button v-on:click="postRequest()">Get Products</button>
</template>

    <script>
        import axios from 'axios'
        export default {
            name: "Catalogue",
            data() {
                return {
                    categories: [],
                    products: []
                }
            },
            methods: { 
                postRequest() {
                    let requestData = {
                        CalcId: "GET_CATEGORIES",
                        Args: null,
                        Ticket: null
                    };
                    axios.post("https://localhost:44333/", requestData)
                        .then(response => {
                            console.log(response.data);
                            return response.data;
                        });
                }
                /*getCategories() {
                    let requestData = {
                        CalcId: "GET_CATEGORIES",
                        Args: null,
                        Ticket: null
                    }
                    this.categories = JSON.parse(this.postRequest(requestData));
                },
                getProducts() {
                    let data = {
                        CalcId: "GET_PRODUCTS",
                        Args: null,
                        Ticket: null
                    }
                   this.products = JSON.parse(this.postRequest(data));
                },
                filterProductsByCategory(id) {
                    var filteredProducts = this.products.filter(function (el) {
                        return el.groupId == id;
                    });
                    return filteredProducts;
                }*/
            }
        }
    </script>
