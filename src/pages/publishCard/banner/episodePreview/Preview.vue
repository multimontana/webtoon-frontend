<template>
    <section class="content-section container">
        <div class="page">
            <img src="../../../../assets/img/read/page.png" alt="Page">
        </div>
        <div class="episode-nav">
            <button class="arrow-prev arrow btn-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.24838 8.4684L7.47843 12.304C7.76291 12.5653 8.22571 12.5653 8.51018 12.304C8.79466 12.0427 8.79466 11.6175 8.51018 11.3562L5.74687 8.82419H12.0824C12.4858 8.82419 13 8.36397 13 7.99733C13 7.62679 12.4858 7.15672 12.0824 7.15672L5.74687 7.15672L8.51018 4.64283C8.79466 4.3815 8.79466 3.95635 8.51018 3.69502C8.37007 3.56631 8.18325 3.5 7.99643 3.5C7.80961 3.5 7.62279 3.56631 7.48268 3.69502L3.25262 7.51278L3.21043 7.56285C3.14075 7.64995 3.00914 7.83503 3.00043 8C2.98852 8.22572 3.22715 8.45279 3.24838 8.4684Z" fill="#2e2e2e" />
                </svg>
            </button>
            <span class="current-page">
                2
            </span>
            <button class="arrow-next arrow btn-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.24838 8.4684L7.47843 12.304C7.76291 12.5653 8.22571 12.5653 8.51018 12.304C8.79466 12.0427 8.79466 11.6175 8.51018 11.3562L5.74687 8.82419H12.0824C12.4858 8.82419 13 8.36397 13 7.99733C13 7.62679 12.4858 7.15672 12.0824 7.15672L5.74687 7.15672L8.51018 4.64283C8.79466 4.3815 8.79466 3.95635 8.51018 3.69502C8.37007 3.56631 8.18325 3.5 7.99643 3.5C7.80961 3.5 7.62279 3.56631 7.48268 3.69502L3.25262 7.51278L3.21043 7.56285C3.14075 7.64995 3.00914 7.83503 3.00043 8C2.98852 8.22572 3.22715 8.45279 3.24838 8.4684Z" fill="#2e2e2e" />
                </svg>
            </button>
        </div>
        <div class="menu-button__keeper">
            <button class="arrow btn-light">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5316 3.24838L3.696 7.47843C3.43467 7.76291 3.43467 8.22571 3.696 8.51018C3.95733 8.79466 4.38248 8.79466 4.64381 8.51018L7.17581 5.74687L7.17581 12.0824C7.17581 12.4858 7.63603 13 8.00267 13C8.37321 13 8.84328 12.4858 8.84328 12.0824L8.84328 5.74687L11.3572 8.51018C11.6185 8.79466 12.0436 8.79466 12.305 8.51018C12.4337 8.37007 12.5 8.18325 12.5 7.99643C12.5 7.80961 12.4337 7.62279 12.305 7.48268L8.48722 3.25262L8.43715 3.21043C8.35005 3.14075 8.16497 3.00914 8 3.00043C7.77428 2.98852 7.54721 3.22715 7.5316 3.24838Z" fill="#2E2E2E"/>
                </svg>
            </button>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Preview'
}
</script>

<style scoped>
@import "preview.css";
</style>
