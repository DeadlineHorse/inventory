<template>
    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="item bg-white rounded">
            <div class="d-flex justify-content-between flex-column p-3">
                <h6 class="title mb-1">{{ title }}</h6>
                <div class="comment fw-light fs-6">This is shit comment about an item.</div>
                <div class="d-flex align-items-center justify-content-between gap-2 mt-3">
                    <div class="d-flex align-items-center owner fw-light fs-6 gap-2">
                        <i class="bi bi-person-fill"></i> John Doe
                    </div>
                    <div class="d-flex gap-2">
                        <button class="btn btn-sm btn-secondary">
                            <i class="bi bi-view-list"></i>
                        </button>
                        <router-link class="btn btn-sm btn-primary" :to="{ query: { id: 1 } }">
                            <i class="bi bi-link"></i>
                        </router-link>
                        <button class="btn btn-sm btn-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'Item',

    props: ['title']

}
</script>