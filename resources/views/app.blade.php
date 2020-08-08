<!DOCTYPE html>
<html lang="en">
@include('layout.head')

<body class="{{\Illuminate\Support\Facades\Session::get('usershow') ? 'layout-3' : ''}}">
<div>
    <div class="main-wrapper {{\Illuminate\Support\Facades\Session::get('usershow') ? 'container' : 'main-wrapper-1
'}}">
        {{--        <div class="navbar-bg"></div>--}}
        {{--        @include('layout.navbar-atas')--}}
        @if(\Illuminate\Support\Facades\Session::get('usershow'))
            @include('layout.navbar-bawah')
        @else
            @include('layout.navbar-admin')
        @endif
        @routes
        @inertia
        <footer class="main-footer">
            <div class="row text-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-footer-widget">
                        <h6 class="footer_title">About Us</h6>
                        <p>Gold Master believes in making a difference. No matter how small or big it is, we shall
                            continue to pursue innovative ideas that can change the world and do wonders for the gaming
                            community. At Gold Master, our mission is to continuously evolve in the gaming community and
                            provide a reliable digital platform where gamers don’t only game harder, but can buy and
                            sell freely with ease.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-footer-widget">
                        <h6 class="footer_title">Contact</h6>
                        <p><i class="fa fa-envelope"></i> &nbsp; goldmasterid@gmail.com</p>
                        <p><i class="fa fa-phone"></i> &nbsp; 0813-3035-5613</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="single-footer-widget f_social_wd">
                        <h6 class="footer_title">Sosial Media</h6>
                        <a href="https://web.facebook.com/GoldMasterASLI/" target="_blank" class="btn"><i class="fab fa-facebook"></i></a>
                        <a href="skype:live:.cid.94dd815f707e8705?add" target="_blank" class="btn"><i class="fab fa-skype"></i></a>
                        <a href="https://wa.me/6281330355613" target="_blank" class="btn"><i class="fab fa-discord"></i></a>
                        <a href="https://t.me/GoldMasterAdmin" target="_blank" class="btn"><i class="fab fa-telegram"></i></a>
                        <a href="https://wa.me/6281330355613" target="_blank" class="btn"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-12">
                    <h6 class="footer_title">Supported Payment</h6>
                    {{--                    <div class="col-lg-4 col-md-6">--}}
                    <div class="single-footer-widget">
                        <a class="btn"><i class="fab fa-btc"></i> </a>
                        <a class="btn"><i class="fab fa-paypal"></i> </a>
                        <a class="btn"><i class="fab fa-ethereum"></i> </a>
                    </div>
                    {{--                    </div>--}}
                </div>
            </div>
            <div class="row footer-bottom d-flex justify-content-between align-items-center">
                <p class="col-lg-12 footer-text text-center">
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    Copyright ©
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved
                </p>
            </div>
        </footer>
    </div>
</div>
<script src="{{ asset('stisla/assets') }}/modules/jquery.min.js"></script>
<script src="{{ asset('stisla/assets') }}/modules/popper.js"></script>
<script src="{{ asset('stisla/assets') }}/modules/tooltip.js"></script>
<script src="{{ asset('stisla/assets') }}/modules/bootstrap/js/bootstrap.min.js"></script>
<script src="{{ asset('stisla/assets') }}/modules/nicescroll/jquery.nicescroll.min.js"></script>
<script src="{{ asset('stisla/assets') }}/modules/moment.min.js"></script>
<script src="{{ asset('stisla/assets') }}/js/stisla.js"></script>


<script src="{{ asset('stisla/assets') }}/js/scripts.js"></script>
<script src="{{ asset('stisla/assets') }}/js/custom.js"></script>

</body>
</html>
