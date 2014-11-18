/* Examples */

/*
 * Example 1:
 *   - no animation
 *   - custom gradient
 *
 * By the way - you may specify more than 2 colors for the gradient
 */
$('.first.circle').circleProgress({
    startAngle: -Math.PI / 4 * 3,
    size: 230,
    value: 0.85,
    fill: { color: '#508275' },
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
});

/*
 * Example 2:
 *   - default gradient
 *   - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
 */
$('.second.circle').circleProgress({
    startAngle: -Math.PI / 4 * 3,
    size: 230,
    value: 0.90,
    fill: { color: '#508275' },
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>')
});

/*
 * Example 3:
 *   - custom gradient
 *   - listening to `circle-animation-progress` event and display the dynamic change of the value: from 0 to 0.8
 */
$('.third.circle').circleProgress({
    startAngle: -Math.PI / 4 * 3,
    size: 230,
    value: 0.85,
    fill: { color: '#508275' },
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
});

/*
 * Example 4:
 *   - solid color fill
 *   - custom start angle
 */
$('.forth.circle').circleProgress({
    startAngle: -Math.PI / 4 * 3,
    size: 230,
    value: 0.95,
    fill: { color: '#508275' },
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');
});

/*
 * Example 5:
 *   - image fill; image should be squared; it will be stretched to SxS size, where S - size of the widget
 *   - fallback color fill (when image is not loaded)
 *   - custom widget size (default is 100px)
 *   - custom circle thickness (default is 1/14 of the size)
 */
$('.fifth.circle').circleProgress({
    value: 0.7,
    size: 60,
    thickness: 20,
    animationStartValue: 1.0,
    fill: {
        color: 'rgba(0, 0, 0, .1)', // fallback color when image is not loaded
        image: 'http://i.imgur.com/pT0i89v.png'
    },
    reverse: true
});