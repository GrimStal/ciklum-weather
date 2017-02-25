<script>
  window.Laravel = <?php echo json_encode([
        'csrfToken' => csrf_token(),
    ]); ?>
</script>

<script src="{{ asset('/js/app.js') }}" type="text/javascript"></script>

@yield('page_scripts')
