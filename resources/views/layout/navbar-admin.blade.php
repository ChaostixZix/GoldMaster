<div class="navbar-bg"></div>
<nav class="navbar navbar-expand-lg main-navbar">
    <form class="form-inline mr-auto">
        <ul class="navbar-nav mr-3">
            <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></span></a></li>
        </ul>
    </form>
</nav>
<div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
            <img href="{{route('depan.index')}}" class="img-fluid" src="{{asset('logo.png')}}" alt="logo"
                 width="70">
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
            <a href="{{route('depan.index')}}">GM</a>
        </div>
        @if(\Illuminate\Support\Facades\Session::has('admin'))
        <ul class="sidebar-menu">
            <li class="menu-header">Dashboard</li>
            <li><a href="{{route('admin.index')}}" class="nav-link"><span>Dashboard</span></a></li>
            <li><a href="{{route('admin.game')}}" class="nav-link"><span>Game</span></a></li>
            <li><a href="{{route('admin.server')}}" class="nav-link"><span>Server</span></a></li>
            <li><a href="{{route('admin.trademode')}}" class="nav-link"><span>Trade Mode</span></a></li>
            <li><a href="{{route('admin.order')}}" class="nav-link"><span>Order</span></a></li>
            <li><a href="{{route('admin.items')}}" class="nav-link"><span>Cari Farmer</span></a></li>
            <li><a href="{{route('admin.memberstock')}}" class="nav-link"><span>Member Stock</span></a></li>
            <li><a href="{{route('admin.withdraw')}}" class="nav-link"><span>Withdraw</span></a></li>
            <li><a href="{{route('admin.usdrate')}}" class="nav-link"><span>USD Rate</span></a></li>
        </ul>
        @endif

        <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
            <a href="{{route('depan.index')}}" class="btn btn-primary btn-lg btn-block btn-icon-split">
                <i class="fa fa-hone"></i> Home
            </a>
        </div>
    </aside>
</div>
