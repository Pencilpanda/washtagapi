<?php
/**
 * Shortcode tab view
 *
 * @since   2.1.0
 * @author  YITH <plugins@yithemes.com>
 * @package YITH WooCommerce Points and Rewards
 */

defined( 'ABSPATH' ) || exit;

$shortcodes = array(
	esc_html__( 'Simple customers list', 'yith-woocommerce-points-and-rewards' )    => array(
		'id'       => 'ywpar_customers_points_simple',
		'type'     => 'copy-to-clipboard',
		'readonly' => true,
		'value'    => '[ywpar_customers_points style="simple" tabs="yes" num_of_customers="3"]',
	),
	esc_html__( 'Boxed customers list', 'yith-woocommerce-points-and-rewards' )     => array(
		'id'       => 'ywpar_customers_points_boxed',
		'type'     => 'copy-to-clipboard',
		'readonly' => true,
		'value'    => '[ywpar_customers_points style="boxed" tabs="yes" num_of_customers="3"]',
	),
);

ob_start();
?>

<div id="yith_woocommerce_points_and_rewards_shortcodes" >
	<div class="yit-admin-panel-content-wrap yith-plugin-ui--boxed-wp-list-style">
		<div id="yith_woocommerce_points_and_rewards_shortcodes-container" class="yit_options rm_option rm_input rm_text">
			<table  class="yith-plugin-ui--boxed-wp-list-style wp-list-table widefat">
				<tbody>
				<?php foreach ( $shortcodes as $shortcode_label => $shortcode ) : ?>
					<tr>
						<th class="shortcode_label"><?php echo esc_html( $shortcode_label ); ?></th>
						<td class="shortcode_code"><?php yith_plugin_fw_get_field( $shortcode, true ); ?></td>
					</tr>
				<?php endforeach; ?>
				</tbody>
			</table>
		</div>
	</div>
</div>

<?php

return ob_get_clean(); ?>