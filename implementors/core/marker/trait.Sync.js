(function() {var implementors = {};
implementors["criterion"] = [{"text":"impl&lt;'a, M&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/struct.BenchmarkGroup.html\" title=\"struct criterion::BenchmarkGroup\">BenchmarkGroup</a>&lt;'a, M&gt;","synthetic":true,"types":["criterion::benchmark_group::BenchmarkGroup"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/struct.BenchmarkId.html\" title=\"struct criterion::BenchmarkId\">BenchmarkId</a>","synthetic":true,"types":["criterion::benchmark_group::BenchmarkId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/async_executor/struct.FuturesExecutor.html\" title=\"struct criterion::async_executor::FuturesExecutor\">FuturesExecutor</a>","synthetic":true,"types":["criterion::async_executor::FuturesExecutor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/async_executor/struct.SmolExecutor.html\" title=\"struct criterion::async_executor::SmolExecutor\">SmolExecutor</a>","synthetic":true,"types":["criterion::async_executor::SmolExecutor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/async_executor/struct.AsyncStdExecutor.html\" title=\"struct criterion::async_executor::AsyncStdExecutor\">AsyncStdExecutor</a>","synthetic":true,"types":["criterion::async_executor::AsyncStdExecutor"]},{"text":"impl&lt;'a, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/struct.Bencher.html\" title=\"struct criterion::Bencher\">Bencher</a>&lt;'a, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as <a class=\"trait\" href=\"criterion/measurement/trait.Measurement.html\" title=\"trait criterion::measurement::Measurement\">Measurement</a>&gt;::<a class=\"type\" href=\"criterion/measurement/trait.Measurement.html#associatedtype.Value\" title=\"type criterion::measurement::Measurement::Value\">Value</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["criterion::bencher::Bencher"]},{"text":"impl&lt;'a, 'b, A, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/struct.AsyncBencher.html\" title=\"struct criterion::AsyncBencher\">AsyncBencher</a>&lt;'a, 'b, A, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as <a class=\"trait\" href=\"criterion/measurement/trait.Measurement.html\" title=\"trait criterion::measurement::Measurement\">Measurement</a>&gt;::<a class=\"type\" href=\"criterion/measurement/trait.Measurement.html#associatedtype.Value\" title=\"type criterion::measurement::Measurement::Value\">Value</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["criterion::bencher::AsyncBencher"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/measurement/struct.WallTime.html\" title=\"struct criterion::measurement::WallTime\">WallTime</a>","synthetic":true,"types":["criterion::measurement::WallTime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/profiler/struct.ExternalProfiler.html\" title=\"struct criterion::profiler::ExternalProfiler\">ExternalProfiler</a>","synthetic":true,"types":["criterion::profiler::ExternalProfiler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion/enum.BatchSize.html\" title=\"enum criterion::BatchSize\">BatchSize</a>","synthetic":true,"types":["criterion::BatchSize"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion/enum.Baseline.html\" title=\"enum criterion::Baseline\">Baseline</a>","synthetic":true,"types":["criterion::Baseline"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion/enum.PlottingBackend.html\" title=\"enum criterion::PlottingBackend\">PlottingBackend</a>","synthetic":true,"types":["criterion::PlottingBackend"]},{"text":"impl&lt;M&nbsp;=&nbsp;<a class=\"struct\" href=\"criterion/measurement/struct.WallTime.html\" title=\"struct criterion::measurement::WallTime\">WallTime</a>&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/struct.Criterion.html\" title=\"struct criterion::Criterion\">Criterion</a>&lt;M&gt;","synthetic":true,"types":["criterion::Criterion"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion/enum.Throughput.html\" title=\"enum criterion::Throughput\">Throughput</a>","synthetic":true,"types":["criterion::Throughput"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion/enum.AxisScale.html\" title=\"enum criterion::AxisScale\">AxisScale</a>","synthetic":true,"types":["criterion::AxisScale"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion/struct.PlotConfiguration.html\" title=\"struct criterion::PlotConfiguration\">PlotConfiguration</a>","synthetic":true,"types":["criterion::PlotConfiguration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion/enum.SamplingMode.html\" title=\"enum criterion::SamplingMode\">SamplingMode</a>","synthetic":true,"types":["criterion::SamplingMode"]}];
implementors["criterion_plot"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/axis/struct.Properties.html\" title=\"struct criterion_plot::axis::Properties\">Properties</a>","synthetic":true,"types":["criterion_plot::axis::Properties"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/candlestick/struct.Properties.html\" title=\"struct criterion_plot::candlestick::Properties\">Properties</a>","synthetic":true,"types":["criterion_plot::candlestick::Properties"]},{"text":"impl&lt;X, WM, BM, BH, WH&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/candlestick/struct.Candlesticks.html\" title=\"struct criterion_plot::candlestick::Candlesticks\">Candlesticks</a>&lt;X, WM, BM, BH, WH&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BH: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;BM: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;WH: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;WM: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["criterion_plot::candlestick::Candlesticks"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/curve/struct.Properties.html\" title=\"struct criterion_plot::curve::Properties\">Properties</a>","synthetic":true,"types":["criterion_plot::curve::Properties"]},{"text":"impl&lt;X, Y&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/curve/enum.Curve.html\" title=\"enum criterion_plot::curve::Curve\">Curve</a>&lt;X, Y&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["criterion_plot::curve::Curve"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/errorbar/struct.Properties.html\" title=\"struct criterion_plot::errorbar::Properties\">Properties</a>","synthetic":true,"types":["criterion_plot::errorbar::Properties"]},{"text":"impl&lt;X, Y, L, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/errorbar/enum.ErrorBar.html\" title=\"enum criterion_plot::errorbar::ErrorBar\">ErrorBar</a>&lt;X, Y, L, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["criterion_plot::errorbar::ErrorBar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/filledcurve/struct.Properties.html\" title=\"struct criterion_plot::filledcurve::Properties\">Properties</a>","synthetic":true,"types":["criterion_plot::filledcurve::Properties"]},{"text":"impl&lt;X, Y1, Y2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/filledcurve/struct.FilledCurve.html\" title=\"struct criterion_plot::filledcurve::FilledCurve\">FilledCurve</a>&lt;X, Y1, Y2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["criterion_plot::filledcurve::FilledCurve"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/grid/struct.Properties.html\" title=\"struct criterion_plot::grid::Properties\">Properties</a>","synthetic":true,"types":["criterion_plot::grid::Properties"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/key/struct.Properties.html\" title=\"struct criterion_plot::key::Properties\">Properties</a>","synthetic":true,"types":["criterion_plot::key::Properties"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/key/enum.Boxed.html\" title=\"enum criterion_plot::key::Boxed\">Boxed</a>","synthetic":true,"types":["criterion_plot::key::Boxed"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/key/enum.Horizontal.html\" title=\"enum criterion_plot::key::Horizontal\">Horizontal</a>","synthetic":true,"types":["criterion_plot::key::Horizontal"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/key/enum.Justification.html\" title=\"enum criterion_plot::key::Justification\">Justification</a>","synthetic":true,"types":["criterion_plot::key::Justification"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/key/enum.Order.html\" title=\"enum criterion_plot::key::Order\">Order</a>","synthetic":true,"types":["criterion_plot::key::Order"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/key/enum.Position.html\" title=\"enum criterion_plot::key::Position\">Position</a>","synthetic":true,"types":["criterion_plot::key::Position"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/key/enum.Stacked.html\" title=\"enum criterion_plot::key::Stacked\">Stacked</a>","synthetic":true,"types":["criterion_plot::key::Stacked"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/key/enum.Vertical.html\" title=\"enum criterion_plot::key::Vertical\">Vertical</a>","synthetic":true,"types":["criterion_plot::key::Vertical"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.Figure.html\" title=\"struct criterion_plot::Figure\">Figure</a>","synthetic":true,"types":["criterion_plot::Figure"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.BoxWidth.html\" title=\"struct criterion_plot::BoxWidth\">BoxWidth</a>","synthetic":true,"types":["criterion_plot::BoxWidth"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.Font.html\" title=\"struct criterion_plot::Font\">Font</a>","synthetic":true,"types":["criterion_plot::Font"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.FontSize.html\" title=\"struct criterion_plot::FontSize\">FontSize</a>","synthetic":true,"types":["criterion_plot::FontSize"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.Key.html\" title=\"struct criterion_plot::Key\">Key</a>","synthetic":true,"types":["criterion_plot::Key"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.Label.html\" title=\"struct criterion_plot::Label\">Label</a>","synthetic":true,"types":["criterion_plot::Label"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.LineWidth.html\" title=\"struct criterion_plot::LineWidth\">LineWidth</a>","synthetic":true,"types":["criterion_plot::LineWidth"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.Opacity.html\" title=\"struct criterion_plot::Opacity\">Opacity</a>","synthetic":true,"types":["criterion_plot::Opacity"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.Output.html\" title=\"struct criterion_plot::Output\">Output</a>","synthetic":true,"types":["criterion_plot::Output"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.PointSize.html\" title=\"struct criterion_plot::PointSize\">PointSize</a>","synthetic":true,"types":["criterion_plot::PointSize"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/enum.Range.html\" title=\"enum criterion_plot::Range\">Range</a>","synthetic":true,"types":["criterion_plot::Range"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.Size.html\" title=\"struct criterion_plot::Size\">Size</a>","synthetic":true,"types":["criterion_plot::Size"]},{"text":"impl&lt;P, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.TicLabels.html\" title=\"struct criterion_plot::TicLabels\">TicLabels</a>&lt;P, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["criterion_plot::TicLabels"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.Title.html\" title=\"struct criterion_plot::Title\">Title</a>","synthetic":true,"types":["criterion_plot::Title"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/enum.Axes.html\" title=\"enum criterion_plot::Axes\">Axes</a>","synthetic":true,"types":["criterion_plot::Axes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/enum.Axis.html\" title=\"enum criterion_plot::Axis\">Axis</a>","synthetic":true,"types":["criterion_plot::Axis"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/enum.Color.html\" title=\"enum criterion_plot::Color\">Color</a>","synthetic":true,"types":["criterion_plot::Color"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/enum.Grid.html\" title=\"enum criterion_plot::Grid\">Grid</a>","synthetic":true,"types":["criterion_plot::Grid"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/enum.LineType.html\" title=\"enum criterion_plot::LineType\">LineType</a>","synthetic":true,"types":["criterion_plot::LineType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/enum.PointType.html\" title=\"enum criterion_plot::PointType\">PointType</a>","synthetic":true,"types":["criterion_plot::PointType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/enum.Scale.html\" title=\"enum criterion_plot::Scale\">Scale</a>","synthetic":true,"types":["criterion_plot::Scale"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.ScaleFactor.html\" title=\"struct criterion_plot::ScaleFactor\">ScaleFactor</a>","synthetic":true,"types":["criterion_plot::ScaleFactor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/enum.Terminal.html\" title=\"enum criterion_plot::Terminal\">Terminal</a>","synthetic":true,"types":["criterion_plot::Terminal"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"criterion_plot/enum.VersionError.html\" title=\"enum criterion_plot::VersionError\">VersionError</a>","synthetic":true,"types":["criterion_plot::VersionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"criterion_plot/struct.Version.html\" title=\"struct criterion_plot::Version\">Version</a>","synthetic":true,"types":["criterion_plot::Version"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()