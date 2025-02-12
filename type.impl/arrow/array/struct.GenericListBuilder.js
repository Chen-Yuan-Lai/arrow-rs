(function() {
    var type_impls = Object.fromEntries([["arrow",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrayBuilder-for-GenericListBuilder%3COffsetSize,+T%3E\" class=\"impl\"><a href=\"#impl-ArrayBuilder-for-GenericListBuilder%3COffsetSize,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize, T&gt; <a class=\"trait\" href=\"arrow/array/trait.ArrayBuilder.html\" title=\"trait arrow::array::ArrayBuilder\">ArrayBuilder</a> for <a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;<div class=\"where\">where\n    OffsetSize: <a class=\"trait\" href=\"arrow/array/trait.OffsetSizeTrait.html\" title=\"trait arrow::array::OffsetSizeTrait\">OffsetSizeTrait</a>,\n    T: <a class=\"trait\" href=\"arrow/array/trait.ArrayBuilder.html\" title=\"trait arrow::array::ArrayBuilder\">ArrayBuilder</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/trait.ArrayBuilder.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + 'static)</h4></section></summary><div class=\"docblock\"><p>Returns the builder as a non-mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any_mut\" class=\"method trait-impl\"><a href=\"#method.as_any_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/trait.ArrayBuilder.html#tymethod.as_any_mut\" class=\"fn\">as_any_mut</a>(&amp;mut self) -&gt; &amp;mut (dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + 'static)</h4></section></summary><div class=\"docblock\"><p>Returns the builder as a mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_box_any\" class=\"method trait-impl\"><a href=\"#method.into_box_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/trait.ArrayBuilder.html#tymethod.into_box_any\" class=\"fn\">into_box_any</a>(self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the boxed builder as a box of <code>Any</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/trait.ArrayBuilder.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of array slots in the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method trait-impl\"><a href=\"#method.finish\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/trait.ArrayBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"arrow/array/trait.Array.html\" title=\"trait arrow::array::Array\">Array</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the array and reset this builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method trait-impl\"><a href=\"#method.finish_cloned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/trait.ArrayBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"arrow/array/trait.Array.html\" title=\"trait arrow::array::Array\">Array</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the array without resetting the builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/trait.ArrayBuilder.html#method.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether number of array slots is zero</div></details></div></details>","ArrayBuilder","arrow::array::ListBuilder","arrow::array::LargeListBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericListBuilder%3COffsetSize,+T%3E\" class=\"impl\"><a href=\"#impl-Debug-for-GenericListBuilder%3COffsetSize,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;<div class=\"where\">where\n    OffsetSize: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow/array/trait.OffsetSizeTrait.html\" title=\"trait arrow::array::OffsetSizeTrait\">OffsetSizeTrait</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow/array/trait.ArrayBuilder.html\" title=\"trait arrow::array::ArrayBuilder\">ArrayBuilder</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow::array::ListBuilder","arrow::array::LargeListBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenericListBuilder%3CO,+T%3E\" class=\"impl\"><a href=\"#impl-Default-for-GenericListBuilder%3CO,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;O, T&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"arrow/array/trait.OffsetSizeTrait.html\" title=\"trait arrow::array::OffsetSizeTrait\">OffsetSizeTrait</a>,\n    T: <a class=\"trait\" href=\"arrow/array/trait.ArrayBuilder.html\" title=\"trait arrow::array::ArrayBuilder\">ArrayBuilder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;O, T&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","arrow::array::ListBuilder","arrow::array::LargeListBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Extend%3COption%3CV%3E%3E-for-GenericListBuilder%3CO,+B%3E\" class=\"impl\"><a href=\"#impl-Extend%3COption%3CV%3E%3E-for-GenericListBuilder%3CO,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O, B, V, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt; for <a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;O, B&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"arrow/array/trait.OffsetSizeTrait.html\" title=\"trait arrow::array::OffsetSizeTrait\">OffsetSizeTrait</a>,\n    B: <a class=\"trait\" href=\"arrow/array/trait.ArrayBuilder.html\" title=\"trait arrow::array::ArrayBuilder\">ArrayBuilder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;E&gt;,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = E&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend\" class=\"method trait-impl\"><a href=\"#method.extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\" class=\"fn\">extend</a>&lt;T&gt;(&amp;mut self, iter: T)<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,</div></h4></section></summary><div class='docblock'>Extends a collection with the contents of an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#420\">Source</a><a href=\"#method.extend_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_one\" class=\"fn\">extend_one</a>(&amp;mut self, item: A)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Extends a collection with exactly one element.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_reserve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#428\">Source</a><a href=\"#method.extend_reserve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\" class=\"fn\">extend_reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Reserves capacity in a collection for the given number of additional elements. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\">Read more</a></div></details></div></details>","Extend<Option<V>>","arrow::array::ListBuilder","arrow::array::LargeListBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericListBuilder%3COffsetSize,+T%3E\" class=\"impl\"><a href=\"#impl-GenericListBuilder%3COffsetSize,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize, T&gt; <a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;<div class=\"where\">where\n    OffsetSize: <a class=\"trait\" href=\"arrow/array/trait.OffsetSizeTrait.html\" title=\"trait arrow::array::OffsetSizeTrait\">OffsetSizeTrait</a>,\n    T: <a class=\"trait\" href=\"arrow/array/trait.ArrayBuilder.html\" title=\"trait arrow::array::ArrayBuilder\">ArrayBuilder</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.values\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.values\" class=\"fn\">values</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns the child array builder as a mutable reference.</p>\n<p>This mutable reference can be used to append values into the child array builder,\nbut you must call <a href=\"#method.append\"><code>append</code></a> to delimit each distinct list value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.values_ref\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.values_ref\" class=\"fn\">values_ref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Returns the child array builder as an immutable reference</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.append\" class=\"fn\">append</a>(&amp;mut self, is_valid: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>)</h4></section></summary><div class=\"docblock\"><p>Finish the current variable-length list array slot</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics if the length of <a href=\"arrow/array/struct.GenericListBuilder.html#method.values\" title=\"method arrow::array::GenericListBuilder::values\"><code>Self::values</code></a> exceeds <code>OffsetSize::MAX</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_value\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.append_value\" class=\"fn\">append_value</a>&lt;I, V&gt;(&amp;mut self, i: I)<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Append a value to this <a href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\"><code>GenericListBuilder</code></a></p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>builder = ListBuilder::new(Int32Builder::new());\n\nbuilder.append_value([<span class=\"prelude-val\">Some</span>(<span class=\"number\">1</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">2</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">3</span>)]);\nbuilder.append_value([]);\nbuilder.append_value([<span class=\"prelude-val\">None</span>]);\n\n<span class=\"kw\">let </span>array = builder.finish();\n<span class=\"macro\">assert_eq!</span>(array.len(), <span class=\"number\">3</span>);\n\n<span class=\"macro\">assert_eq!</span>(array.value_offsets(), <span class=\"kw-2\">&amp;</span>[<span class=\"number\">0</span>, <span class=\"number\">3</span>, <span class=\"number\">3</span>, <span class=\"number\">4</span>]);\n<span class=\"kw\">let </span>values = array.values().as_primitive::&lt;Int32Type&gt;();\n<span class=\"macro\">assert_eq!</span>(values, <span class=\"kw-2\">&amp;</span>Int32Array::from(<span class=\"macro\">vec!</span>[<span class=\"prelude-val\">Some</span>(<span class=\"number\">1</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">2</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">3</span>), <span class=\"prelude-val\">None</span>]));</code></pre></div>\n<p>This is an alternative API to appending directly to <a href=\"arrow/array/struct.GenericListBuilder.html#method.values\" title=\"method arrow::array::GenericListBuilder::values\"><code>Self::values</code></a> and\ndelimiting the result with <a href=\"arrow/array/struct.GenericListBuilder.html#method.append\" title=\"method arrow::array::GenericListBuilder::append\"><code>Self::append</code></a></p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>builder = ListBuilder::new(Int32Builder::new());\n\nbuilder.values().append_value(<span class=\"number\">1</span>);\nbuilder.values().append_value(<span class=\"number\">2</span>);\nbuilder.values().append_value(<span class=\"number\">3</span>);\nbuilder.append(<span class=\"bool-val\">true</span>);\nbuilder.append(<span class=\"bool-val\">true</span>);\nbuilder.values().append_null();\nbuilder.append(<span class=\"bool-val\">true</span>);\n\n<span class=\"kw\">let </span>array = builder.finish();\n<span class=\"macro\">assert_eq!</span>(array.len(), <span class=\"number\">3</span>);\n\n<span class=\"macro\">assert_eq!</span>(array.value_offsets(), <span class=\"kw-2\">&amp;</span>[<span class=\"number\">0</span>, <span class=\"number\">3</span>, <span class=\"number\">3</span>, <span class=\"number\">4</span>]);\n<span class=\"kw\">let </span>values = array.values().as_primitive::&lt;Int32Type&gt;();\n<span class=\"macro\">assert_eq!</span>(values, <span class=\"kw-2\">&amp;</span>Int32Array::from(<span class=\"macro\">vec!</span>[<span class=\"prelude-val\">Some</span>(<span class=\"number\">1</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">2</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">3</span>), <span class=\"prelude-val\">None</span>]));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_null\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.append_null\" class=\"fn\">append_null</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Append a null to this <a href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\"><code>GenericListBuilder</code></a></p>\n<p>See <a href=\"arrow/array/struct.GenericListBuilder.html#method.append_value\" title=\"method arrow::array::GenericListBuilder::append_value\"><code>Self::append_value</code></a> for an example use.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_option\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.append_option\" class=\"fn\">append_option</a>&lt;I, V&gt;(&amp;mut self, i: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;I&gt;)<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Appends an optional value into this <a href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\"><code>GenericListBuilder</code></a></p>\n<p>If <code>Some</code> calls <a href=\"arrow/array/struct.GenericListBuilder.html#method.append_value\" title=\"method arrow::array::GenericListBuilder::append_value\"><code>Self::append_value</code></a> otherwise calls <a href=\"arrow/array/struct.GenericListBuilder.html#method.append_null\" title=\"method arrow::array::GenericListBuilder::append_null\"><code>Self::append_null</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"arrow/array/struct.GenericListArray.html\" title=\"struct arrow::array::GenericListArray\">GenericListArray</a>&lt;OffsetSize&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <a href=\"arrow/array/struct.GenericListArray.html\" title=\"struct arrow::array::GenericListArray\"><code>GenericListArray</code></a> and reset this builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"arrow/array/struct.GenericListArray.html\" title=\"struct arrow::array::GenericListArray\">GenericListArray</a>&lt;OffsetSize&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <a href=\"arrow/array/struct.GenericListArray.html\" title=\"struct arrow::array::GenericListArray\"><code>GenericListArray</code></a> without resetting the builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offsets_slice\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.offsets_slice\" class=\"fn\">offsets_slice</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[OffsetSize]</a></h4></section></summary><div class=\"docblock\"><p>Returns the current offsets buffer as a slice</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validity_slice\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.validity_slice\" class=\"fn\">validity_slice</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the current null buffer as a slice</p>\n</div></details></div></details>",0,"arrow::array::ListBuilder","arrow::array::LargeListBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericListBuilder%3COffsetSize,+T%3E\" class=\"impl\"><a href=\"#impl-GenericListBuilder%3COffsetSize,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize, T&gt; <a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;<div class=\"where\">where\n    OffsetSize: <a class=\"trait\" href=\"arrow/array/trait.OffsetSizeTrait.html\" title=\"trait arrow::array::OffsetSizeTrait\">OffsetSizeTrait</a>,\n    T: <a class=\"trait\" href=\"arrow/array/trait.ArrayBuilder.html\" title=\"trait arrow::array::ArrayBuilder\">ArrayBuilder</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.new\" class=\"fn\">new</a>(values_builder: T) -&gt; <a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\"><code>GenericListBuilder</code></a> from a given values array builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(\n    values_builder: T,\n    capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n) -&gt; <a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\"><code>GenericListBuilder</code></a> from a given values array builder\n<code>capacity</code> is the number of items to pre-allocate space for in this builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_field\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"arrow/array/struct.GenericListBuilder.html#tymethod.with_field\" class=\"fn\">with_field</a>(\n    self,\n    field: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"arrow/datatypes/struct.Field.html\" title=\"struct arrow::datatypes::Field\">Field</a>&gt;&gt;,\n) -&gt; <a class=\"struct\" href=\"arrow/array/struct.GenericListBuilder.html\" title=\"struct arrow::array::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;</h4></section></summary><div class=\"docblock\"><p>Override the field passed to <a href=\"arrow/array/struct.GenericListArray.html#method.new\" title=\"associated function arrow::array::GenericListArray::new\"><code>GenericListArray::new</code></a></p>\n<p>By default a nullable field is created with the name <code>item</code></p>\n<p>Note: <a href=\"arrow/array/struct.GenericListBuilder.html#method.finish\" title=\"method arrow::array::GenericListBuilder::finish\"><code>Self::finish</code></a> and <a href=\"arrow/array/struct.GenericListBuilder.html#method.finish_cloned\" title=\"method arrow::array::GenericListBuilder::finish_cloned\"><code>Self::finish_cloned</code></a> will panic if the\nfield’s data type does not match that of <code>T</code></p>\n</div></details></div></details>",0,"arrow::array::ListBuilder","arrow::array::LargeListBuilder"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[30701]}