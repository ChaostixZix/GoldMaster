
<nav class="navbar navbar-secondary navbar-expand-lg">
    <img href="{{route('depan.index')}}" class="img-fluid" src="{{asset('logo.png')}}" alt="logo"
         width="70">
    <div class="container">
        <ul class="navbar-nav">
            @if(\Illuminate\Support\Facades\Session::get('usershow'))
                <li class="nav-item">
                    <a href="{{ route('depan.index') }}" class="nav-link"><i class="fa fa-home"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" data-toggle="dropdown" class="nav-link has-dropdown"><i
                            class="fa fa-cart-plus"></i><span>Transaction</span></a>
                    <ul class="dropdown-menu">
                        <li class="nav-item"><a href="{{route('user.index')}}" class="nav-link">Dashboard</a></li>
                        <li class="nav-item"><a href="{{route('user.history')}}" class="nav-link">My Order</a></li>
                        <li class="nav-item"><a href="{{ route('user.memberstock') }}" class="nav-link">My Stock</a>
                        </li>
                        <li class="nav-item"><a href="{{ route('user.sell') }}" class="nav-link">Sell</a></li>
                    </ul>
                </li>
                @if(\Illuminate\Support\Facades\Session::get('usershow'))
                    <li class="nav-item dropdown">
                        <a href="#" data-toggle="dropdown" class="nav-link has-dropdown"><span>Currency</span></a>
                    @if(\Illuminate\Support\Facades\Session::get('currency') === 'usd' || !\Illuminate\Support\Facades\Session::get('currency'))
                        <ul class="dropdown-menu">
                            <li class="nav-item"><a href="{{route('depan.changeCurrency', ['currency' => 'idr'])}}" class="nav-link">IDR</a></li>
                            <li class="nav-item active"><a href="{{route('depan.changeCurrency', ['currency' => 'usd'])}}" class="nav-link">USD</a></li>
                        </ul>
                    @elseif(\Illuminate\Support\Facades\Session::get('currency') === 'idr')
                        <ul class="dropdown-menu">
                            <li class="nav-item active"><a href="{{route('depan.changeCurrency', ['currency' => 'idr'])}}" class="nav-link">IDR</a></li>
                            <li class="nav-item"><a href="{{route('depan.changeCurrency', ['currency' => 'usd'])}}" class="nav-link">USD</a></li>
                        </ul>
                    @endif
                    </li>

                @endif
            @endif
            @if(\Illuminate\Support\Facades\Session::has('admin'))
                <li class="nav-item dropdown">
                    <a href="#" data-toggle="dropdown" class="nav-link has-dropdown"><i
                            class="fa fa-rocket"></i><span>Admin</span></a>
                    <ul class="dropdown-menu">
                        <li class="nav-item"><a href="{{route('admin.index')}}" class="nav-link">Dashboard</a></li>
                        <li class="nav-item"><a href="{{route('admin.game')}}" class="nav-link">Game</a></li>
                        <li class="nav-item"><a href="{{route('admin.server')}}" class="nav-link">Server</a></li>
                        <li class="nav-item"><a href="{{route('admin.trademode')}}" class="nav-link">Trade Mode</a></li>
                        <li class="nav-item"><a href="{{route('admin.order')}}" class="nav-link">Order</a></li>
                        <li class="nav-item"><a href="{{route('admin.items')}}" class="nav-link">Cari Farmer</a></li>
                        <li class="nav-item"><a href="{{route('admin.memberstock')}}" class="nav-link">Member Stock</a>
                        </li>
                        <li class="nav-item"><a href="{{route('admin.withdraw')}}" class="nav-link">Withdraw</a></li>
                        <li class="nav-item"><a href="{{route('admin.usdrate')}}" class="nav-link">USD Rate</a></li>
                    </ul>
                </li>
            @endif
        </ul>
    </div>
    <ul class="navbar-nav navbar-right">
        @if(\Illuminate\Support\Facades\Session::has('admin') && !\Illuminate\Support\Facades\Session::get('usershow'))
            <li class="dropdown"><a href="#" data-toggle="dropdown"
                                    class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <img alt="image" src="{{ asset('stisla/assets') }}/img/avatar/avatar-1.png"
                         class="rounded-circle mr-1">
                    <div class="d-sm-none text-secondary d-lg-inline-block">Hi, Admin</div>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a href="{{route('admin.auth.logout')}}" class="dropdown-item has-icon text-danger">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </a>
                </div>
            </li>
        @endif
    </ul>
</nav>
