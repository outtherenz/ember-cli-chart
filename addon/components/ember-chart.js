/* global Chart */
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class EmberChart extends Component {

  constructor() {
    super(...arguments);

    this.plugins = this.plugins || [];
  }

  @action
  drawChart(element) {
    let { data, type, options, plugins } = this.args;
    let chart = new Chart(element, {
      type, data, options, plugins
    });

    this.chart = chart;
  }

  @action
  updateChart() {
    let { data, options } = this.args;

    if (this.chart) {
      this.chart.data = data;
      this.chart.options = options;
      chart.update();
    }
  }

  willDestroy() {
    this.chart.destroy();
  }

}
