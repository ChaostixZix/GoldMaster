<nav class="navbar navbar-secondary navbar-expand-lg">
    <img class="img-fluid" src="{{asset('logo.png')}}" alt="logo"
         width="70">
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
                    <li class="nav-item"><a href="{{ route('user.sell') }}" class="nav-link">Sell</a></li>
                    <li class="nav-item"><a href="{{ route('user.memberstock') }}" class="nav-link">Stocks</a></li>
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
                        <li class="nav-item"><a href="{{route('admin.order')}}" class="nav-link">Order</a></li>
                        <li class="nav-item"><a href="{{route('admin.items')}}" class="nav-link">Cari Farmer</a></li>
                        <li class="nav-item"><a href="{{route('admin.memberstock')}}" class="nav-link">Member Stock</a></li>
                        <li class="nav-item"><a href="{{route('admin.withdraw')}}" class="nav-link">Withdraw</a></li>
                        <li class="nav-item"><a href="{{route('admin.usdrate')}}" class="nav-link">USD Rate</a></li>
                    </ul>
                </li>
            @endif
        </ul>
    </div>
    <ul class="navbar-nav navbar-right">
        {{--        <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"--}}
        {{--                                                     class="nav-link nav-link-lg message-toggle beep"><i--}}
        {{--                    class="far fa-envelope"></i></a>--}}
        {{--            <div class="dropdown-menu dropdown-list dropdown-menu-right">--}}
        {{--                <div class="dropdown-header">Messages--}}
        {{--                    <div class="float-right">--}}
        {{--                        <a href="#">Mark All As Read</a>--}}
        {{--                    </div>--}}
        {{--                </div>--}}
        {{--                <div class="dropdown-list-content dropdown-list-message">--}}
        {{--                    <a href="#" class="dropdown-item dropdown-item-unread">--}}
        {{--                        <div class="dropdown-item-avatar">--}}
        {{--                            <img alt="image" src="{{ asset('stisla/assets') }}/img/avatar/avatar-1.png" class="rounded-circle">--}}
        {{--                            <div class="is-online"></div>--}}
        {{--                        </div>--}}
        {{--                        <div class="dropdown-item-desc">--}}
        {{--                            <b>Kusnaedi</b>--}}
        {{--                            <p>Hello, Bro!</p>--}}
        {{--                            <div class="time">10 Hours Ago</div>--}}
        {{--                        </div>--}}
        {{--                    </a>--}}
        {{--                    <a href="#" class="dropdown-item dropdown-item-unread">--}}
        {{--                        <div class="dropdown-item-avatar">--}}
        {{--                            <img alt="image" src="{{ asset('stisla/assets') }}/img/avatar/avatar-2.png" class="rounded-circle">--}}
        {{--                        </div>--}}
        {{--                        <div class="dropdown-item-desc">--}}
        {{--                            <b>Dedik Sugiharto</b>--}}
        {{--                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>--}}
        {{--                            <div class="time">12 Hours Ago</div>--}}
        {{--                        </div>--}}
        {{--                    </a>--}}
        {{--                    <a href="#" class="dropdown-item dropdown-item-unread">--}}
        {{--                        <div class="dropdown-item-avatar">--}}
        {{--                            <img alt="image" src="{{ asset('stisla/assets') }}/img/avatar/avatar-3.png" class="rounded-circle">--}}
        {{--                            <div class="is-online"></div>--}}
        {{--                        </div>--}}
        {{--                        <div class="dropdown-item-desc">--}}
        {{--                            <b>Agung Ardiansyah</b>--}}
        {{--                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>--}}
        {{--                            <div class="time">12 Hours Ago</div>--}}
        {{--                        </div>--}}
        {{--                    </a>--}}
        {{--                    <a href="#" class="dropdown-item">--}}
        {{--                        <div class="dropdown-item-avatar">--}}
        {{--                            <img alt="image" src="{{ asset('stisla/assets') }}/img/avatar/avatar-4.png" class="rounded-circle">--}}
        {{--                        </div>--}}
        {{--                        <div class="dropdown-item-desc">--}}
        {{--                            <b>Ardian Rahardiansyah</b>--}}
        {{--                            <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>--}}
        {{--                            <div class="time">16 Hours Ago</div>--}}
        {{--                        </div>--}}
        {{--                    </a>--}}
        {{--                    <a href="#" class="dropdown-item">--}}
        {{--                        <div class="dropdown-item-avatar">--}}
        {{--                            <img alt="image" src="{{ asset('stisla/assets') }}/img/avatar/avatar-5.png" class="rounded-circle">--}}
        {{--                        </div>--}}
        {{--                        <div class="dropdown-item-desc">--}}
        {{--                            <b>Alfa Zulkarnain</b>--}}
        {{--                            <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>--}}
        {{--                            <div class="time">Yesterday</div>--}}
        {{--                        </div>--}}
        {{--                    </a>--}}
        {{--                </div>--}}
        {{--                <div class="dropdown-footer text-center">--}}
        {{--                    <a href="#">View All <i class="fas fa-chevron-right"></i></a>--}}
        {{--                </div>--}}
        {{--            </div>--}}
        {{--        </li>--}}
        {{--        <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"--}}
        {{--                                                     class="nav-link notification-toggle nav-link-lg beep"><i--}}
        {{--                    class="far fa-bell"></i></a>--}}
        {{--            <div class="dropdown-menu dropdown-list dropdown-menu-right">--}}
        {{--                <div class="dropdown-header">Notifications--}}
        {{--                    <div class="float-right">--}}
        {{--                        <a href="#">Mark All As Read</a>--}}
        {{--                    </div>--}}
        {{--                </div>--}}
        {{--                <div class="dropdown-list-content dropdown-list-icons">--}}
        {{--                    <a href="#" class="dropdown-item dropdown-item-unread">--}}
        {{--                        <div class="dropdown-item-icon bg-primary text-white">--}}
        {{--                            <i class="fas fa-code"></i>--}}
        {{--                        </div>--}}
        {{--                        <div class="dropdown-item-desc">--}}
        {{--                            Template update is available now!--}}
        {{--                            <div class="time text-primary">2 Min Ago</div>--}}
        {{--                        </div>--}}
        {{--                    </a>--}}
        {{--                    <a href="#" class="dropdown-item">--}}
        {{--                        <div class="dropdown-item-icon bg-info text-white">--}}
        {{--                            <i class="far fa-user"></i>--}}
        {{--                        </div>--}}
        {{--                        <div class="dropdown-item-desc">--}}
        {{--                            <b>You</b> and <b>Dedik Sugiharto</b> are now friends--}}
        {{--                            <div class="time">10 Hours Ago</div>--}}
        {{--                        </div>--}}
        {{--                    </a>--}}
        {{--                    <a href="#" class="dropdown-item">--}}
        {{--                        <div class="dropdown-item-icon bg-success text-white">--}}
        {{--                            <i class="fas fa-check"></i>--}}
        {{--                        </div>--}}
        {{--                        <div class="dropdown-item-desc">--}}
        {{--                            <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>--}}
        {{--                            <div class="time">12 Hours Ago</div>--}}
        {{--                        </div>--}}
        {{--                    </a>--}}
        {{--                    <a href="#" class="dropdown-item">--}}
        {{--                        <div class="dropdown-item-icon bg-danger text-white">--}}
        {{--                            <i class="fas fa-exclamation-triangle"></i>--}}
        {{--                        </div>--}}
        {{--                        <div class="dropdown-item-desc">--}}
        {{--                            Low disk space. Let's clean it!--}}
        {{--                            <div class="time">17 Hours Ago</div>--}}
        {{--                        </div>--}}
        {{--                    </a>--}}
        {{--                    <a href="#" class="dropdown-item">--}}
        {{--                        <div class="dropdown-item-icon bg-info text-white">--}}
        {{--                            <i class="fas fa-bell"></i>--}}
        {{--                        </div>--}}
        {{--                        <div class="dropdown-item-desc">--}}
        {{--                            Welcome to Stisla template!--}}
        {{--                            <div class="time">Yesterday</div>--}}
        {{--                        </div>--}}
        {{--                    </a>--}}
        {{--                </div>--}}
        {{--                <div class="dropdown-footer text-center">--}}
        {{--                    <a href="#">View All <i class="fas fa-chevron-right"></i></a>--}}
        {{--                </div>--}}
        {{--            </div>--}}
        {{--        </li>--}}
        @if(\Illuminate\Support\Facades\Session::has('admin'))
            <li class="dropdown"><a href="#" data-toggle="dropdown"
                                    class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <img alt="image" src="{{ asset('stisla/assets') }}/img/avatar/avatar-1.png"
                         class="rounded-circle mr-1">
                    <div class="d-sm-none text-secondary d-lg-inline-block">Hi, Admin</div>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    {{--                <div class="dropdown-title">Logged in 5 min ago</div>--}}
                    {{--                <a href="features-profile.html" class="dropdown-item has-icon">--}}
                    {{--                    <i class="far fa-user"></i> Profile--}}
                    {{--                </a>--}}
                    {{--                <a href="features-activities.html" class="dropdown-item has-icon">--}}
                    {{--                    <i class="fas fa-bolt"></i> Activities--}}
                    {{--                </a>--}}
                    {{--                <a href="features-settings.html" class="dropdown-item has-icon">--}}
                    {{--                    <i class="fas fa-cog"></i> Settings--}}
                    {{--                </a>--}}
                    {{--                <div class="dropdown-divider"></div>--}}
                    <a href="{{route('admin.auth.logout')}}" class="dropdown-item has-icon text-danger">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </a>
                </div>
            </li>
        @endif
        @if(\Illuminate\Support\Facades\Session::has('user'))
            <li class="dropdown"><a href="#" data-toggle="dropdown"
                                    class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <img alt="image" src="{{ asset('stisla/assets') }}/img/avatar/avatar-1.png"
                         class="rounded-circle mr-1">
                    <div class="d-sm-none text-secondary d-lg-inline-block">
                        Hi, {{\Illuminate\Support\Facades\Session::get('user')}}</div>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-title">Balance: ${{\Illuminate\Support\Facades\Session::get('saldo')}}</div>
                    <a href="{{route('user.withdraw')}}" class="dropdown-item has-icon">
                        <i class="fa fa-dollar-sign"></i> Withdraw
                    </a>
                    {{--                <a href="features-activities.html" class="dropdown-item has-icon">--}}
                    {{--                    <i class="fas fa-bolt"></i> Activities--}}
                    {{--                </a>--}}
                    {{--                <a href="features-settings.html" class="dropdown-item has-icon">--}}
                    {{--                    <i class="fas fa-cog"></i> Settings--}}
                    {{--                </a>--}}
                    {{--                <div class="dropdown-divider"></div>--}}
                    <a href="{{route('user.auth.logout')}}" class="dropdown-item has-icon text-danger">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </a>
                </div>
            </li>
        @else
            <a href="{{route('user.auth.loginPage')}}" class="btn btn-primary mr-2">Login</a>
            <a href="{{route('user.auth.registerPage')}}" class="btn btn-primary mr-2">Sign Up</a>
        @endif
    </ul>
</nav>
