<nav class="navbar navbar-secondary navbar-expand-lg">
    <div class="container">
        <ul class="navbar-nav">
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
                    <li class="nav-item"><a href="{{route('user.history')}}" class="nav-link">History</a></li>
                    <li class="nav-item"><a class="nav-link">Sell</a></li>
                </ul>
            </li>
            @if(\Illuminate\Support\Facades\Session::has('admin'))
                <li class="nav-item dropdown">
                    <a href="#" data-toggle="dropdown" class="nav-link has-dropdown"><i
                            class="fa fa-rocket"></i><span>Admin</span></a>
                    <ul class="dropdown-menu">
                        <li class="nav-item"><a href="{{route('admin.index')}}" class="nav-link">Dashboard</a></li>
                        <li class="nav-item"><a href="{{route('admin.game')}}" class="nav-link">Game</a></li>
                        <li class="nav-item"><a href="{{route('admin.server')}}" class="nav-link">Server</a></li>
                        <li class="nav-item"><a href="{{route('admin.trademode')}}" class="nav-link">Trade Mode</a></li>
                    </ul>
                </li>
            @endif
        </ul>
    </div>
</nav>
