<!DOCTYPE html>
<html lang="en">

@section('htmlheader')
    @include('layouts.partials.htmlheader')
@show

<body>
@yield('initial_javascript')
<div id="app">
    <div class="wrapper">

    @include('layouts.partials.mainheader')

    <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
        @include('layouts.partials.contentheader')
        <!-- Main content -->
            <section class="content">
                <!-- Your Page Content Here -->
                @yield('main-content')
            </section><!-- /.content -->
        </div><!-- /.content-wrapper -->

    </div><!-- ./wrapper -->
</div>
@section('scripts')
    @include('layouts.partials.scripts')
@show

</body>
</html>
