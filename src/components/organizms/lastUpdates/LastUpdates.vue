<template>
    <section class="cart-list-keeper container">
        <a href="">
            <h3>
                Посследние обновления
            </h3>
        </a>
        <div class="">
        </div>
        <ul class="cart-list cart-list__big-items">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M7.02003 1.58913C7.74211 0.590836 8.88537 0 10.1289 0C12.255 0 14 1.77251 14 3.95247C14 7.51784 9.30661 12 7 12C4.69339 12 0 7.51784 0 3.95247C0 1.77251 1.74499 0 3.89114 0C5.11463 0 6.27792 0.590836 7.02003 1.58913Z" fill="#D8D8D8" />-->
<!--                            </svg> 3,2 k-->
<!--                        </span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="cart-item">-->
<!--                <div class="cart-image">-->
<!--                    <img src="../../../assets/img/CartImages/image1.jpg">-->
<!--                    <div class="cart-item__like-count">-->
<!--                        <img src="../../../assets/img/like_f_dark.svg">-->
<!--                        <span>3,2 k</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="title">-->
<!--                    <h5 class="cart-genre">Драма <span class="cart-item__like-count"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M8.02003 3.58913C8.74211 2.59084 9.88537 2 11.1289 2C13.255 2 15 3.77251 15 5.95247C15 9.51784 10.3066 14 8 14C5.69339 14 1 9.51784 1 5.95247C1 3.77251 2.74499 2 4.89114 2C6.11463 2 7.27792 2.59084 8.02003 3.58913Z" fill="#D8D8D8" />-->
<!--                            </svg>-->
<!--                            3,2 k</span></h5>-->
<!--                    <h4 class="cart-title">Атака титанов</h4>-->
<!--                </div>-->
<!--            </li>-->
        </ul>
        <button class="cart-list__show-more btn-light btn-sm">
            Загрузить еще
        </button>
    </section>
</template>

<script>
import CartItem from '../../molecules/cartItem/CartItem'
export default {
  name: 'LastUpdates',
  components: { CartItem }
}
</script>

<style>
@import "lastUpdates.css";
</style>
