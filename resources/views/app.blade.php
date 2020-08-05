<!DOCTYPE html>
<html lang="en">
@include('layout.head')

<body class="{{\Illuminate\Support\Facades\Session::get('usershow') ? 'layout-3' : ''}}">
<div>
    <div class="main-wrapper {{\Illuminate\Support\Facades\Session::get('usershow') ? 'container' : 'main-wrapper-1'}}">
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
            <div class="footer-left">
                Copyright &copy; 2020
            </div>
            <div class="footer-right">

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
