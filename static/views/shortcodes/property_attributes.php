<?php
/**
 * [property_attributes] template
 *
 * To modify it, copy it to your theme's root.
 */

global $wp_properties;
?>

<?php if ( empty($wp_properties['property_groups']) || $wp_properties['configuration']['property_overview']['sort_stats_by_groups'] != 'true' ) : ?>
  <ul id="property_stats" class="<?php wpp_css('property::property_stats', "property_stats overview_stats list"); ?>">
    <?php @draw_stats($data); ?>
  </ul>
<?php else: ?>
  <?php @draw_stats($data); ?>
<?php endif; ?>