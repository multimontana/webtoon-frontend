<template>
    <div class="comments-keeper">
        <h3>Комментарии <span class="comments-count">1 233</span></h3>
        <textarea class="comments-add" rows="1" placeholder="Добавить комментарий"></textarea>
        <div class="comments-buttons">
            <button class="comments-cancel">
                Отмена
            </button>
            <button>
                Отправить
            </button>
        </div>
        <div class="comments">
            <div class="comment">
                <hr>
                <div class="comment-content">
                    <img src="../../../assets/img/avatar.jpg" alt="" class="comment-avatar">
                    <div class="comment-text-contant">
                        <h5 class="comment-header">
                            <span class="comment-username">wizard_323</span>
                            <span class="comment-date">8 мар 2018</span>
                        </h5>
                        <article>Давным-давно человечество было всего лишь «их» кормом, до тех пор, пока оно не построило гигантскую стену вокруг своей страны. С тех пор прошло сто лет мира и большинство людей жили счастливой.</article>
                        <a href="" class="comment__show-more">Развернуть</a>
                        <div class="comment__reply-keeper">
                            <div class="like">
                                <button>
                                    <img src="../../../assets/img/icons/Like_icon.svg" alt="Like">
                                    <img class="dark" src="../../../assets/img/icons/Like_Dark_icon.svg" alt="Like">
                                </button>
                                12 233
                            </div>
                            <div class="dislike">
                                <button>
                                    <img src="../../../assets/img/icons/Dislike_icon.svg" alt="Dislike">
                                    <img class="dark" src="../../../assets/img/icons/Dislike_Dark_icon.svg" alt="Like">
                                </button>
                                1 610
                            </div>
                            <div class="comment__actions">
                                <a href="" class="comment__action">Удалить</a>
                                <a href="" class="comment__action">Ответить</a>
                            </div>
                            <span class="comment__reply-count">
                                    Ответы 32
                                </span>
                        </div>
                    </div>
                </div>
                <div class="comment comment-reply">
                    <hr>
                    <div class="comment-content">
                        <img src="../../../assets/img/avatar.jpg" alt="" class="comment-avatar">
                        <div class="comment-text-contant">
                            <h5 class="comment-header">
                                <span class="comment-username">wizard_323</span>
                                <span class="comment-date">8 мар 2018</span>
                            </h5>
                            <article>Давным-давно человечество было всего лишь «их» кормом, до тех пор, пока оно не построило гигантскую стену вокруг своей страны. С тех пор прошло сто лет мира и большинство людей жили счастливой.</article>
                            <a href="" class="comment__show-more">Развернуть</a>
                            <div class="comment__reply-keeper">
                                <div class="like">
                                    <button>
                                        <img src="../../../assets/img/icons/Like_icon.svg" alt="Like">
                                        <img class="dark" src="../../../assets/img/icons/Like_Dark_icon.svg" alt="Like">
                                    </button>
                                    12 233
                                </div>
                                <div class="dislike">
                                    <button>
                                        <img src="../../../assets/img/icons/Dislike_icon.svg" alt="Dislike">
                                        <img class="dark" src="../../../assets/img/icons/Dislike_Dark_icon.svg" alt="Like">
                                    </button>
                                    1 610
                                </div>
                                <div class="comment__actions">
                                    <a href="" class="comment__action">Ответить</a>
                                </div>
                                <span class="comment__reply-count">
                                        Ответы 32
                                    </span>
                                <div class="comment__reply-input">
                                    <textarea class="comments-add" rows="1" placeholder="Добавить комментарий"></textarea>
                                    <div class="comments-buttons">
                                        <button class="comments-cancel">
                                            Отмена
                                        </button>
                                        <button>
                                            Отправить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment">
                <hr>
                <div class="comment-content">
                    <img src="../../../assets/img/avatar.jpg" alt="" class="comment-avatar">
                    <div class="comment-text-contant">
                        <h5 class="comment-header">
                            <span class="comment-username">wizard_323</span>
                            <span class="comment-date">8 мар 2018</span>
                        </h5>
                        <article>Давным-давно человечество было всего лишь «их» кормом, до тех пор, пока оно не построило гигантскую стену вокруг своей страны. С тех пор прошло сто лет мира и большинство людей жили счастливой.</article>
                        <a href="" class="comment__show-more">Развернуть</a>
                        <div class="comment__reply-keeper">
                            <div class="like">
                                <button>
                                    <img src="../../../assets/img/icons/Like_icon.svg" alt="Like">
                                    <img class="dark" src="../../../assets/img/icons/Like_Dark_icon.svg" alt="Like">
                                </button>
                                12 233
                            </div>
                            <div class="dislike">
                                <button>
                                    <img src="../../../assets/img/icons/Dislike_icon.svg" alt="Dislike">
                                    <img class="dark" src="../../../assets/img/icons/Dislike_Dark_icon.svg" alt="Like">
                                </button>
                                1 610
                            </div>
                            <div class="comment__actions">
                                <a href="" class="comment__action">Ответить</a>
                            </div>
                            <span class="comment__reply-count">
                                    Ответы 32
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--        <div class="pagination">-->
<!--            <button class="prev-page">-->
<!--                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.24838 8.4684L7.47843 12.304C7.76291 12.5653 8.22571 12.5653 8.51018 12.304C8.79466 12.0427 8.79466 11.6175 8.51018 11.3562L5.74687 8.82419H12.0824C12.4858 8.82419 13 8.36397 13 7.99733C13 7.62679 12.4858 7.15672 12.0824 7.15672L5.74687 7.15672L8.51018 4.64283C8.79466 4.3815 8.79466 3.95635 8.51018 3.69502C8.37007 3.56631 8.18325 3.5 7.99643 3.5C7.80961 3.5 7.62279 3.56631 7.48268 3.69502L3.25262 7.51278L3.21043 7.56285C3.14075 7.64995 3.00914 7.83503 3.00043 8C2.98852 8.22572 3.22715 8.45279 3.24838 8.4684Z" fill="#2E2E2E" />-->
<!--                </svg>-->
<!--            </button>-->
<!--            <div class="pages">-->
<!--                <button class="page">-->
<!--                    1-->
<!--                </button>-->
<!--                <button class="page active">-->
<!--                    2-->
<!--                </button>-->
<!--                <button class="page">-->
<!--                    3-->
<!--                </button>-->
<!--                <button class="page">-->
<!--                    4-->
<!--                </button>-->
<!--            </div>-->
<!--            <button class="next-page">-->
<!--                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7516 7.5316L8.52157 3.696C8.23709 3.43467 7.77429 3.43467 7.48982 3.696C7.20534 3.95733 7.20534 4.38248 7.48982 4.64381L10.2531 7.17581L3.91759 7.17581C3.51423 7.17581 3 7.63603 3 8.00267C3 8.37321 3.51423 8.84328 3.91759 8.84328L10.2531 8.84328L7.48982 11.3572C7.20534 11.6185 7.20534 12.0436 7.48982 12.305C7.62993 12.4337 7.81675 12.5 8.00357 12.5C8.19039 12.5 8.37721 12.4337 8.51732 12.305L12.7474 8.48722L12.7896 8.43715C12.8593 8.35005 12.9909 8.16497 12.9996 8C13.0115 7.77428 12.7729 7.54721 12.7516 7.5316Z" fill="#2E2E2E" />-->
<!--                </svg>-->
<!--            </button>-->
<!--        </div>-->
    </div>
</template>

<script>
export default {
  name: 'CommentsKeeper'
}
</script>

<style>
@import 'commentsKeeper.css';
</style>
