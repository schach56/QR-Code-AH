'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002e$002dMain$0024$0024anon$00241 from "./livechart.-Main$$anon$1.js";
import * as $j_livechart$002e$002dMain$0024$0024anon$00242 from "./livechart.-Main$$anon$2.js";
import * as $j_livechart$002e$002dMain$0024$002dChapter$002dData from "./livechart.-Main$-Chapter-Data.js";
import * as $j_livechart$002e$002dMain$0024$002dExercise$002dResponse from "./livechart.-Main$-Exercise-Response.js";
import * as $j_livechart$002e$002dMain$0024$002dRating$002dData from "./livechart.-Main$-Rating-Data.js";
import * as $j_livechart$002e$002dSimple$002dText$002dEditor from "./livechart.-Simple-Text-Editor.js";
function $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement($thiz, chapter$11, understandingVar$3, difficultyVar$3, qualityVar$3, scopeVar$3, feedbackVar$3, currentVar, maxRating) {
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-stars");
  var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var isEmpty = (maxRating < 1);
  var gap = (((-1) + maxRating) | 0);
  var scala$collection$immutable$Range$$numRangeElements = ((1 + gap) | 0);
  if (((scala$collection$immutable$Range$$numRangeElements <= 0) && (!isEmpty))) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(1, maxRating, 1, true);
  }
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().newBuilder__scm_Builder();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(1, 1, maxRating, isEmpty);
  while (it.sci_RangeIterator__f__hasNext) {
    var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b);
    var x0 = it.next__I();
    var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
    var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls);
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
    var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x0) => ((current) => {
      var current$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(current);
      return ((current$1 >= x0) ? "star filled" : "star");
    }))(x0));
    var $x_2 = $x_3.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$6, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$());
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$7, "\u2605", r);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
    var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
    var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((currentVar, x0, chapter$11, understandingVar$3, difficultyVar$3, qualityVar$3, scopeVar$3, feedbackVar$3) => ((_$27) => {
      var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentVar);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$9, x0);
      var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter$11);
      if ((!(this$12 === ""))) {
        var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Llivechart_Main$__f_allResponsesVar);
        var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
          var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(data);
          var existing = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1).getOrElse__O__F0__O(chapter$11, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
            var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
            var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
            var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "");
            return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$11, exercises, rating);
          }))));
          var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(understandingVar$3);
          var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$16.Lcom_raquo_airstream_state_SourceVar__f_signal);
          var understanding = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$17.tryNow__s_util_Try()).get__O());
          var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(difficultyVar$3);
          var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$18.Lcom_raquo_airstream_state_SourceVar__f_signal);
          var difficulty = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$19.tryNow__s_util_Try()).get__O());
          var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(qualityVar$3);
          var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$20.Lcom_raquo_airstream_state_SourceVar__f_signal);
          var quality = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$21.tryNow__s_util_Try()).get__O());
          var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(scopeVar$3);
          var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$22.Lcom_raquo_airstream_state_SourceVar__f_signal);
          var scope = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$23.tryNow__s_util_Try()).get__O());
          var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar$3);
          var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$24.Lcom_raquo_airstream_state_SourceVar__f_signal);
          var feedback = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$25.tryNow__s_util_Try()).get__O());
          var updatedRating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(understanding, difficulty, quality, scope, feedback);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
          var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
          var chapter = this$27.Llivechart_Main$ChapterData__f_chapter;
          var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
          var exercises$1 = this$28.Llivechart_Main$ChapterData__f_exercises;
          var updatedChapter = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, exercises$1, updatedRating);
          $thiz.saveToLocalStorage__T__Llivechart_Main$ChapterData__V(chapter$11, updatedChapter);
          var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(this$32.updated__O__O__sci_MapOps(chapter$11, updatedChapter));
        }));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$33, mod);
      }
    }))(currentVar, x0, chapter$11, understandingVar$3, difficultyVar$3, qualityVar$3, scopeVar$3, feedbackVar$3));
    var elem = $x_5.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_2, $x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$34, onNext)])));
    this$35.addOne__O__scm_Growable(elem);
  }
  var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b).result__O());
  var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
  return $x_8.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$36, nodes, renderableSeq)])));
}
export { $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement as $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement };
/** @constructor */
function $c_Llivechart_Main$() {
  this.Llivechart_Main$__f_qrDataVar = null;
  this.Llivechart_Main$__f_currentHashVar = null;
  this.Llivechart_Main$__f_chapterExercises = null;
  this.Llivechart_Main$__f_allResponsesVar = null;
  $n_Llivechart_Main$ = this;
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i = 0;
  while ((i < 16)) {
    b.addOne__O__sci_VectorBuilder(false);
    i = ((1 + i) | 0);
  }
  $x_1.apply__O__Lcom_raquo_airstream_state_Var(b.result__sci_Vector());
  this.Llivechart_Main$__f_qrDataVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("Hier stehen die QR Daten");
  this.Llivechart_Main$__f_currentHashVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(window.location.hash));
  try {
    window.addEventListener("hashchange", ((_$1) => {
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_currentHashVar);
      var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(window.location.hash);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$3, value);
    }));
  } catch (e) {
  }
  var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Scanne die QR Codes und beschreibe deren Inhalte. Beschreibe zus\u00e4tzlich, die Gemeinsamkeiten.", "Welche Aussage trifft zu QR-Codes?", "Beschreibe, welche Vorstellungen du hast, wie QR Codes funktionieren."]));
  var y = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var $x_6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("einfuehrung", y);
  var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var y$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1);
  var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("nachricht", y$1);
  var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var y$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
  var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("maskierung", y$2);
  var elems$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var y$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$3);
  var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("fehlerkorrektur", y$3);
  var elems$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var y$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$4);
  var $x_2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("anwendung", y$4);
  var elems$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var y$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$5);
  var elems$6 = $x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_6, $x_5, $x_4, $x_3, $x_2, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("zusammenfassung", y$5)]));
  this.Llivechart_Main$__f_chapterExercises = this$22.from__sc_IterableOnce__sci_Map(elems$6);
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var;
  var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$();
  var elems$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
  this.Llivechart_Main$__f_allResponsesVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_8).apply__O__Lcom_raquo_airstream_state_Var(this$23.from__sc_IterableOnce__sci_Map(elems$7));
}
export { $c_Llivechart_Main$ as $c_Llivechart_Main$ };
$c_Llivechart_Main$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Main$.prototype.constructor = $c_Llivechart_Main$;
/** @constructor */
function $h_Llivechart_Main$() {
}
export { $h_Llivechart_Main$ as $h_Llivechart_Main$ };
$h_Llivechart_Main$.prototype = $c_Llivechart_Main$.prototype;
$c_Llivechart_Main$.prototype.ensureAllExercises__T__Llivechart_Main$ChapterData__Llivechart_Main$ChapterData = (function(chapter, data) {
  var allExercisesForChapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_chapterExercises).getOrElse__O__F0__O(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  }))));
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data).Llivechart_Main$ChapterData__f_exercises);
  var f = ((_$2) => {
    var _$2$1 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(_$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$2$1).Llivechart_Main$ExerciseResponse__f_task;
  });
  if ((this$3 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0 = this$3.head__O();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$3.tail__O());
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
    }
    var this$4 = h;
  }
  var answeredTasks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$4);
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allExercisesForChapter);
  var f$1 = ((elem) => {
    var elem$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(elem);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answeredTasks).contains__O__Z(elem$1);
  });
  var l = this$5;
  block: {
    var result;
    while (true) {
      if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).isEmpty__Z()) {
        var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        break;
      } else {
        var h$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).head__O();
        var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).tail__O());
        if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$1(h$1)) === true)) {
          l = t$1;
          continue;
        }
        var start = l;
        var remaining = t$1;
        while (true) {
          if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).isEmpty__Z()) {
            var result = start;
            break block;
          } else {
            var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).head__O();
            if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$1(x)) !== true)) {
              remaining = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).tail__O());
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
            var toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).tail__O());
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem;
              currentLast = newElem;
              toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).tail__O());
            }
            var next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(firstMiss).tail__O());
            var nextToCopy = next;
            while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).isEmpty__Z())) {
              var head = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).head__O();
              if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$1(head)) !== true)) {
                next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).tail__O());
                }
                nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
              }
            }
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).isEmpty__Z())) {
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
  var f$2 = ((task) => {
    var task$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(task);
    var answer = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    return new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(task$1, answer);
  });
  if ((this$7 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var missingExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0$2 = this$7.head__O();
    var h$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t$2 = h$2;
    var rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$7.tail__O());
    while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).head__O();
      var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2).sci_$colon$colon__f_next = nx$1;
      t$2 = nx$1;
      rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).tail__O());
    }
    var missingExercises = h$2;
  }
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data).Llivechart_Main$ChapterData__f_exercises);
  var allExercises = this$8.appendedAll__sc_IterableOnce__sci_List(missingExercises);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data);
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data);
  var chapter$1 = this$9.Llivechart_Main$ChapterData__f_chapter;
  var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data);
  var rating = this$10.Llivechart_Main$ChapterData__f_rating;
  return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$1, allExercises, rating);
});
$c_Llivechart_Main$.prototype.saveToLocalStorage__T__Llivechart_Main$ChapterData__V = (function(chapter, data) {
  try {
    var completeData = this.ensureAllExercises__T__Llivechart_Main$ChapterData__Llivechart_Main$ChapterData(chapter, data);
    var $x_11 = JSON;
    var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_exercises);
    var f = ((ex) => {
      var ex$1 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(ex);
      var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex$1).Llivechart_Main$ExerciseResponse__f_task;
      var $x_7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("task", s);
      var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex$1).Llivechart_Main$ExerciseResponse__f_answer);
      var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
      var ev = this$4.s_$less$colon$less$__f_singleton;
      var s$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$5.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$5.get__O()));
      var fields = $x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_7, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer", s$1)]));
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
    });
    if ((this$10 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var seq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0 = this$10.head__O();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$10.tail__O());
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
      }
      var seq = h;
    }
    var _2 = [...$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjsr_Compat$().toJSVarArgsImpl__sci_Seq__sjs_js_Array(seq)];
    var $x_9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("exercises", _2);
    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_understanding;
    var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("understanding", value);
    var value$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_difficulty;
    var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("difficulty", value$1);
    var value$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_quality;
    var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("quality", value$2);
    var value$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_scope;
    var $x_2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("scope", value$3);
    var s$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_feedback;
    var fields$1 = $x_6.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_5, $x_4, $x_3, $x_2, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("feedback", s$2)]));
    var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
    var fields$2 = $x_10.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_9, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("rating", _2$1)]));
    var $x_1 = $x_11.stringify($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2));
    var json = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($x_1);
    window.localStorage.setItem(("qr-chapter-" + chapter), json);
  } catch (e) {
  }
});
$c_Llivechart_Main$.prototype.loadFromLocalStorage__T__s_Option = (function(chapter) {
  try {
    var stored = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(window.localStorage.getItem(("qr-chapter-" + chapter)));
    if ((stored !== null)) {
      var parsed = JSON.parse(stored);
      matchResult10: {
        var exercises;
        var arg = parsed.exercises;
        var x13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(Array.isArray(arg));
        if ((x13 === true)) {
          var array = parsed.exercises;
          var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), array);
          var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$3));
          var f = ((ex) => {
            var answerValue = ex.answer;
            if (((answerValue === null) || ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answerValue)) === "null"))) {
              var answer = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
            } else {
              var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answerValue));
              var answer = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value);
            }
            var task = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex.task));
            return new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(task, answer);
          });
          if ((this$8 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
            var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
            break matchResult10;
          } else {
            var x0 = this$8.head__O();
            var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
            var t = h;
            var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$8.tail__O());
            while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
              var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
              var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
              t = nx;
              rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
            }
            var exercises = h;
            break matchResult10;
          }
        }
        var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
        var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
      }
      var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsed.rating.understanding));
      var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(x));
      var understanding = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI((this$12.isEmpty__Z() ? 0 : this$12.get__O()));
      var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsed.rating.difficulty));
      var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(x$1));
      var difficulty = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI((this$15.isEmpty__Z() ? 0 : this$15.get__O()));
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsed.rating.quality));
      var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(x$2));
      var quality = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI((this$18.isEmpty__Z() ? 0 : this$18.get__O()));
      var scopeValue = parsed.rating.scope;
      if (((scopeValue === null) || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().equals__O__O__Z(scopeValue, (void 0)))) {
        var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsed.rating.quality));
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(x$3));
        var scope = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI((this$21.isEmpty__Z() ? 0 : this$21.get__O()));
      } else {
        var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(scopeValue));
        var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(x$4));
        var scope = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI((this$24.isEmpty__Z() ? 0 : this$24.get__O()));
      }
      var feedback = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsed.rating.feedback));
      var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(understanding, difficulty, quality, scope, feedback);
      var value$1 = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, exercises, rating);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$1);
    } else {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
  } catch (e) {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
});
$c_Llivechart_Main$.prototype.dataToJsObject__sci_Map__sjs_js_Any = (function(data) {
  var fields = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
  var jsObj = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "anwendung", "zusammenfassung"]));
  var chapterOrder = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterOrder);
  var these = this$3;
  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
    var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
    var chapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data).get__O__s_Option(chapter));
    if ((!this$4.isEmpty__Z())) {
      var x0$1 = this$4.get__O();
      var chapterData = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0$1);
      var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_exercises);
      var f = ((ex) => {
        var ex$1 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(ex);
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex$1).Llivechart_Main$ExerciseResponse__f_task;
        var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("task", s);
        var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex$1).Llivechart_Main$ExerciseResponse__f_answer);
        var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
        var ev = this$8.s_$less$colon$less$__f_singleton;
        var s$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$9.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$9.get__O()));
        var fields$1 = $x_2.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer", s$1)]));
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
      });
      if ((this$14 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var seq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$2 = this$14.head__O();
        var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t = h;
        var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$14.tail__O());
        while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
          var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
          t = nx;
          rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
        }
        var seq = h;
      }
      var exercises = [...$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjsr_Compat$().toJSVarArgsImpl__sci_Seq__sjs_js_Array(seq)];
      var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_understanding;
      var $x_6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("understanding", value);
      var value$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_difficulty;
      var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("difficulty", value$1);
      var value$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_quality;
      var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("quality", value$2);
      var value$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_scope;
      var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("scope", value$3);
      var s$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_feedback;
      var fields$2 = $x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_6, $x_5, $x_4, $x_3, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("feedback", s$2)]));
      var rating = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2);
      var fields$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("chapter", chapter), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("exercises", exercises), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("rating", rating)]));
      jsObj[chapter] = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$3);
    }
    these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
  }
  return jsObj;
});
$c_Llivechart_Main$.prototype.appElement__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("app-container");
  var $x_36 = this.renderMenu__Lcom_raquo_laminar_nodes_ReactiveElement();
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("main-content");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_currentHashVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((h) => {
    var h$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(h);
    var hash = ((h$1 === null) ? "" : h$1);
    if ((hash === "#nachricht")) {
      var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      return $x_4.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$2, "Nachrichten schreiben", r)]))), this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(8), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("nachricht-section"), this.renderPixelArea__I__I__T__Lcom_raquo_laminar_nodes_ReactiveElement(8, 1, "11110000"), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("nachricht"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#nachricht")])));
    } else if ((hash === "#maskierung")) {
      var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      return $x_8.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_6).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$3, "Maskierung", r$1)]))), this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(10), this.renderMaskierung__Lcom_raquo_laminar_nodes_ReactiveElement(), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("maskierung"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#maskierung")])));
    } else if ((hash === "#fehlerkorrektur")) {
      var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      return $x_12.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_10).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$4, "Fehlerkorrektur", r$2)]))), this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(7), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("fehlerkorrektur"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#fehlerkorrektur")])));
    } else if ((hash === "#anwendung")) {
      var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      return $x_16.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_14).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_13.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$5, "Anwendung", r$3)]))), this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(6), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("anwendung"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#anwendung")])));
    } else if ((hash === "#zusammenfassung")) {
      var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      return $x_20.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_19.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_18).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_17.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$6, "Zusammenfassung", r$4)]))), this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(5), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("zusammenfassung"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#zusammenfassung")])));
    } else {
      var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_28 = $x_30.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_29.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$7, "Einleitung", r$5)])));
      var $x_27 = this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(15);
      var $x_26 = this.Infotext__T__T__Lcom_raquo_laminar_nodes_ReactiveElement("Einleitung", "Du kennst das bestimmt, dass du mit dein Smartphone  kurz einen QR-Code scannst und  anschlie\u00dfend zu einer Webseite weitergeleitet wirst. Doch was genau passiert dabei? F\u00fcr welche Anwendungen ist es dann sinnvoll QR-Codes zu nutzen und f\u00fcr welche nicht? Die Antworten auf diese Fragen findest du in den folgenden Kapiteln, welche du auf der Linken seite ausw\u00e4hlen kannst. In der rechten oberen Ecke findest du jeweils eine Zeitabsch\u00e4tzung, wie lange das Kapitel dauert.\nViel Spa\u00df!");
      var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["qr"]));
      var $x_23 = this$8.from__sc_IterableOnce__sci_Set(elems);
      var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-codes-grid"), this.generateQRCodeWithCaption__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement("https://example.com", "Beispiel QR-Code 1", 150), this.imageWithCaption__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement("/qr-example.png", "Beispiel QR-Code 2", 150), this.generateQRCodeWithCaption__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement("Benutze das Wort: QRCode in deiner Abgabe", "Beispiel QR-Code 3", 150)])));
      var $x_22 = this.renderExercise__T__sci_Set__I__s_Option__T__Lcom_raquo_laminar_nodes_ReactiveElement("Scanne die QR Codes und beschreibe deren Inhalte. Beschreibe zus\u00e4tzlich, die Gemeinsamkeiten.", $x_23, 1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value), "einfuehrung");
      var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("QR Codes haben eine feste Gr\u00f6\u00dfe", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("QR Codes k\u00f6nnen ausschlie\u00dflich Links speichern", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Man kann sich bei der Erstellung eines QR Codes den Text selbst aussuchen", true)]));
      var $x_21 = this.renderExerciseMC__T__sci_List__I__T__Lcom_raquo_laminar_nodes_ReactiveElement("Welche Aussage trifft zu QR-Codes?", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1), 2, "einfuehrung");
      var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      return $x_32.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_31.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_28, $x_27, $x_26, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_25).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_24.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_22, $x_21, this.renderExercise__T__sci_Set__I__s_Option__T__Lcom_raquo_laminar_nodes_ReactiveElement("Beschreibe, welche Vorstellungen du hast, wie QR Codes funktionieren.", this$14.from__sc_IterableOnce__sci_Set(elems$2), 3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "einfuehrung")]))), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("einfuehrung"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#einfuehrung")])));
    }
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$15, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_39.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_38.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_37, $x_36, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_35).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_34.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_33, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])))])));
});
$c_Llivechart_Main$.prototype.renderPixelArea__I__I__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(cols, rows, correctPattern) {
  var total = Math.imul(cols, rows);
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i = 0;
  while ((i < total)) {
    b.addOne__O__sci_VectorBuilder(false);
    i = ((1 + i) | 0);
  }
  var pixelGrid = $x_1.apply__O__Lcom_raquo_airstream_state_Var(b.result__sci_Vector());
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(correctPattern);
  var len = this$4.length;
  var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len);
  var i$1 = 0;
  while ((i$1 < len)) {
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(correctPattern);
    var index = i$1;
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$5, index);
    if (((x === 48) || (x === 49))) {
      var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x));
      sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (sb.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
    }
    i$1 = ((1 + i$1) | 0);
  }
  var s = ((len === sb.length__I()) ? correctPattern : sb.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
  if ((this$7.length === total)) {
    var normalized = s;
  } else {
    var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
    if ((this$8.length < total)) {
      var normalized = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().padTo$extension__T__I__C__T(s, total, 48);
    } else {
      var normalized = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().take$extension__T__I__T(s, total);
    }
  }
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__toCharArray__AC($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(normalized));
  var f = ((_$3) => {
    var _$3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(_$3);
    return (_$3$1 === 49);
  });
  var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z(len$1);
  if ((len$1 > 0)) {
    var i$2 = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i$2 < len$1)) {
        var $x_2 = i$2;
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i$2);
        ys.set($x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x0)));
        i$2 = ((1 + i$2) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i$2 < len$1)) {
        var $x_3 = i$2;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i$2);
        ys.set($x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x0$1)));
        i$2 = ((1 + i$2) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i$2 < len$1)) {
        var $x_4 = i$2;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i$2);
        ys.set($x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x0$2)));
        i$2 = ((1 + i$2) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i$2 < len$1)) {
        var $x_5 = i$2;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i$2);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i$2 = ((1 + i$2) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i$2 < len$1)) {
        var $x_6 = i$2;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i$2);
        ys.set($x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x0$3)));
        i$2 = ((1 + i$2) | 0);
      }
    } else if ((xs !== null)) {
      while ((i$2 < len$1)) {
        var $x_7 = i$2;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i$2);
        ys.set($x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
        i$2 = ((1 + i$2) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i$2 < len$1)) {
        var $x_8 = i$2;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i$2);
        ys.set($x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x0$5)));
        i$2 = ((1 + i$2) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i$2 < len$1)) {
        var $x_9 = i$2;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i$2);
        ys.set($x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x0$6)));
        i$2 = ((1 + i$2) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i$2 < len$1)) {
        var $x_10 = i$2;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i$2);
        ys.set($x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x0$7)));
        i$2 = ((1 + i$2) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_11.wrapBooleanArray__AZ__scm_ArraySeq$ofBoolean(ys));
  var parsedPattern = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().from__sc_IterableOnce__sci_Vector(this$14);
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsedPattern);
  var requiredIndices = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$15))).collect__s_PartialFunction__O(new $j_livechart$002e$002dMain$0024$0024anon$00241.$c_Llivechart_Main$$anon$1()));
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_28 = $x_30.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_29.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$16, "Pixel Area", r)])));
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-grid");
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("grid-template-columns: repeat(" + cols) + ", 28px); grid-auto-rows: 28px;"));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid) => {
    var grid$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(grid);
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid$1);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$18))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
      var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
      if ((x$1$1 !== null)) {
        var isOn = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
        var idx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
        var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter((isOn ? "pixel on" : "pixel"));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
        var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
          var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid);
          var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => {
            var g$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(g);
            return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).updated__I__O__sci_Vector(idx, (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).apply__I__O(idx))));
          }));
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$20, mod);
        }));
        return $x_23.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_22.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_21, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$21, onNext)])));
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
    }))));
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$22, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_20 = $x_27.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_26.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_25, $x_24, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-submit-area");
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$24, "Abgeben", r$1);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$5) => {
    var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid);
    var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$26.Lcom_raquo_airstream_state_SourceVar__f_signal);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$27.tryNow__s_util_Try()).get__O());
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((current) => {
    var current$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(current);
    var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(requiredIndices);
    if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_SeqOps__isEmpty__Z(this$28)) {
      return ((current$1 === null) ? (parsedPattern === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current$1).equals__O__Z(parsedPattern));
    } else {
      var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(requiredIndices);
      var res = true;
      var it = this$29.iterator__sc_Iterator();
      while ((res && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z())) {
        var x0$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
        var idx$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(x0$8);
        res = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current$1).apply__I__O(idx$1));
      }
      return res;
    }
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ok) => {
    var ok$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(ok);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(ok$1);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_13 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$31, onNext$1);
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$2);
    if ((x$1$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$3)).s_Some__f_value);
      if ((x27 === true)) {
        return "btn-success";
      }
      if ((x27 === false)) {
        return "btn-error";
      }
    }
    var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$2 === x$1$3)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  }));
  return $x_32.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_31.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_28, $x_20, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_19).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_17, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_16).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_14, $x_13, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_12).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$32, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])))])));
});
$c_Llivechart_Main$.prototype.renderMenu__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#einfuehrung", "Einf\u00fchrung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#nachricht", "Nachrichten schreiben"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#maskierung", "Maskierung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#fehlerkorrektur", "Fehlerkorrektur"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#anwendung", "Anwendung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#zusammenfassung", "Zusammenfassung")]));
  var menuItems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("navbar");
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("navbar-header");
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_27 = $x_29.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_28.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$8, "QR Code", r)])));
  var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_24 = $x_32.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_31.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_30, $x_27, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_26).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_25.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$9, "Interaktives Lernmodul", r$1)])))])));
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("navbar-nav");
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(menuItems);
  var f = ((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
    if ((x$1$1 !== null)) {
      var hash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
      var label = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
      var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).a__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).href__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(hash);
      var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$11, label, r$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onMouseEnter__Lcom_raquo_laminar_keys_EventProp();
      var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
      var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => (void 0)));
      return $x_20.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_19.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_18).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_17.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_16, $x_15, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$13, onNext)])))])));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  });
  if ((this$14 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0 = this$14.head__O();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$14.tail__O());
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
    }
    var nodes = h;
  }
  var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
  var $x_14 = $x_23.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_22.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_21, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$15, nodes, renderableSeq)])));
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("navbar-footer");
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$16, "\ud83d\udcbe Speichern", r$3);
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("save-button");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false));
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => {
    var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "anwendung", "zusammenfassung"]));
    var chapters = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1);
    var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapters);
    var f$1 = ((chapter) => {
      var chapter$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(chapter);
      var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.loadFromLocalStorage__T__s_Option(chapter$1));
      if (this$19.isEmpty__Z()) {
        var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
        var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
        var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "");
        var $x_1 = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$1, exercises, rating);
      } else {
        var $x_1 = this$19.get__O();
      }
      var data = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData($x_1);
      var y = this.ensureAllExercises__T__Llivechart_Main$ChapterData__Llivechart_Main$ChapterData(chapter$1, data);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(chapter$1, y);
    });
    if ((this$25 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$2 = this$25.head__O();
      var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t$1 = h$1;
      var rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$25.tail__O());
      while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).head__O();
        var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$1).sci_$colon$colon__f_next = nx$1;
        t$1 = nx$1;
        rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).tail__O());
      }
      var this$27 = h$1;
    }
    var allData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$27);
    var $x_5 = JSON;
    var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(new Date().toISOString());
    var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("timestamp", s);
    var _2 = this.dataToJsObject__sci_Map__sjs_js_Any(allData);
    var fields = $x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_3, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("data", _2)]));
    var $x_2 = $x_5.stringify($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields), null, 2);
    var json = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($x_2);
    var $x_6 = Blob;
    var fields$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("contentType", "application/json")]));
    var blob = new $x_6([json], $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1));
    var url = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(URL.createObjectURL(blob));
    var link = document.createElement("a");
    link.href = url;
    link.download = (("qr-kurs-antworten-" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(new Date().getTime())) + ".json");
    link.click();
    URL.revokeObjectURL(url);
  }));
  return $x_35.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_34.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_33, $x_24, $x_14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_13).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_12.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_10).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_8, $x_7, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$35, onNext$1)])))])))])));
});
$c_Llivechart_Main$.prototype.renderMaskierung__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  var $x_2 = encodeURIComponent;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_qrDataVar);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.Lcom_raquo_airstream_state_SourceVar__f_signal);
  var $x_1 = $x_2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$2.tryNow__s_util_Try()).get__O()));
  var qrSrcVar = $x_3.apply__O__Lcom_raquo_airstream_state_Var(("https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($x_1)));
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("maskierung-section");
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_14 = $x_16.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$3, "QR Daten: ", r)])));
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_qrDataVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_qrDataVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_9 = $x_13.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_12.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_11, $x_10, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$5, onNext)])));
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$6, "Generiere QR", r$1);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false));
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$8) => {
    var $x_5 = encodeURIComponent;
    var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_qrDataVar);
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$9.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var $x_4 = $x_5($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$10.tryNow__s_util_Try()).get__O()));
    var url = ("https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($x_4));
    var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(qrSrcVar);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$11, url);
  }));
  return $x_21.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_20.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_19, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_18).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_17.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_14, $x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_8).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_6, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$12, onNext$1)])))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).img__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).src__Lcom_raquo_laminar_keys_HtmlAttr()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(qrSrcVar).Lcom_raquo_airstream_state_SourceVar__f_signal), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).alt__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("QR Code"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).width__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("210"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).height__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("210")])))])));
});
$c_Llivechart_Main$.prototype.generateQRCodeWithCaption__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement = (function(text, caption, size) {
  var encodedText = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(encodeURIComponent(text));
  var qrUrl = ((((("https://api.qrserver.com/v1/create-qr-code/?size=" + size) + "x") + size) + "&data=") + encodedText);
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-code-with-caption");
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).img__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).src__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(qrUrl), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).alt__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("QR Code f\u00fcr: " + text)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).width__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).height__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-code")])));
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  return $x_6.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_4, $x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$3, caption, r), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-caption")])))])));
});
$c_Llivechart_Main$.prototype.imageWithCaption__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement = (function(imageSrc, caption, size) {
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-code-with-caption");
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).img__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).src__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(imageSrc), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).alt__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(caption), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).width__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).height__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-code")])));
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  return $x_6.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_4, $x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$3, caption, r), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-caption")])))])));
});
$c_Llivechart_Main$.prototype.renderExercise__T__sci_Set__I__s_Option__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(taskText, keywords, index, image, chapter) {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
  if ((!(this$3 === ""))) {
    var storedData = this.loadFromLocalStorage__T__s_Option(chapter);
  } else {
    var storedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedData);
  if (this$4.isEmpty__Z()) {
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$4.get__O();
    var _$9 = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0);
    var this$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$9).Llivechart_Main$ChapterData__f_exercises);
  }
  if (this$5.isEmpty__Z()) {
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  } else {
    var $x_1 = this$5.get__O();
  }
  var storedAnswers = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($x_1);
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedAnswers);
  _return: {
    var these = this$7;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var _$10 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$10).Llivechart_Main$ExerciseResponse__f_task === taskText)) {
        var this$8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O());
        break _return;
      }
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
    }
    var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  if (this$8.isEmpty__Z()) {
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0$2 = this$8.get__O();
    var _$11 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$2);
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$11).Llivechart_Main$ExerciseResponse__f_answer;
  }
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2);
  var initialText = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$9.isEmpty__Z() ? "" : this$9.get__O()));
  var textVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(initialText);
  var editor = new $j_livechart$002e$002dSimple$002dText$002dEditor.$c_Llivechart_SimpleTextEditor(textVar);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_className).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("exercise-content");
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  if ((index === (-1))) {
    var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$11, "Aufgabe", r);
  } else {
    var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var value = ("Aufgabe " + index);
    var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$12, value, r$1);
  }
  var $x_13 = $x_16.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_14])));
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(image);
  if (this$13.isEmpty__Z()) {
    var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0$3 = this$13.get__O();
    var img = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveElement(x0$3);
    var nodes = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("exercise-image"), img]))));
  }
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeOptionToModifier__s_Option__Lcom_raquo_laminar_modifiers_Modifier(this$14, nodes);
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_9 = $x_11.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_10.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$15, taskText, r$2)])));
  var $x_8 = editor.Llivechart_SimpleTextEditor__f_domElement;
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$16, "Abgeben", r$3);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$12) => {
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(textVar);
    var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$18.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var text = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$19.tryNow__s_util_Try()).get__O());
    var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
    if ((!(this$22 === ""))) {
      var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_allResponsesVar);
      var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
        var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(data);
        var existing = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1).getOrElse__O__F0__O(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
          var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
          var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1);
          var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "");
          return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, exercises, rating);
        }))));
        var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing).Llivechart_Main$ChapterData__f_exercises);
        var f = ((_$13) => {
          var _$13$1 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(_$13);
          return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$13$1).Llivechart_Main$ExerciseResponse__f_task === taskText);
        });
        var l = this$26;
        block: {
          var result;
          while (true) {
            if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).isEmpty__Z()) {
              var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
              break;
            } else {
              var h = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).head__O();
              var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).tail__O());
              if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(h)) === true)) {
                l = t;
                continue;
              }
              var start = l;
              var remaining = t;
              while (true) {
                if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).isEmpty__Z()) {
                  var result = start;
                  break block;
                } else {
                  var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).head__O();
                  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x)) !== true)) {
                    remaining = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).tail__O());
                    continue;
                  }
                  var firstMiss = remaining;
                  var newHead = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                  var toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).tail__O());
                  var currentLast = newHead;
                  while ((toProcess !== firstMiss)) {
                    var newElem = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem;
                    currentLast = newElem;
                    toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).tail__O());
                  }
                  var next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(firstMiss).tail__O());
                  var nextToCopy = next;
                  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).isEmpty__Z())) {
                    var head = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).head__O();
                    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(head)) !== true)) {
                      next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                    } else {
                      while ((nextToCopy !== next)) {
                        var newElem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                        currentLast = newElem$2;
                        nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).tail__O());
                      }
                      nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                      next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                    }
                  }
                  if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).isEmpty__Z())) {
                    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = nextToCopy;
                  }
                  var result = newHead;
                  break block;
                }
              }
            }
          }
        }
        var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
        var answer = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(text);
        var elem = new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(taskText, answer);
        var updatedExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(this$29, elem));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var chapter$1 = this$30.Llivechart_Main$ChapterData__f_chapter;
        var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var rating$1 = this$31.Llivechart_Main$ChapterData__f_rating;
        var updatedChapter = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$1, updatedExercises, rating$1);
        this.saveToLocalStorage__T__Llivechart_Main$ChapterData__V(chapter, updatedChapter);
        var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(this$35.updated__O__O__sci_MapOps(chapter, updatedChapter));
      }));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$36, mod);
    }
    return text;
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text$1) => {
    var text$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(text$1);
    return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(keywords).isEmpty__Z() || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(keywords).exists__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((k) => {
      var k$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(k);
      var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text$2);
      var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$37.toLowerCase()));
      var this$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(k$1);
      var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$38.toLowerCase());
      var this$40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
      return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$39.indexOf(this$40)) !== (-1));
    }))));
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ok) => {
    var ok$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(ok);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(ok$1);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$42, onNext);
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1);
    if ((x$1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$1)).s_Some__f_value);
      if ((x35 === true)) {
        return "btn-success";
      }
      if ((x35 === false)) {
        return "btn-error";
      }
    }
    var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$2 === x$1$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }));
  return $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_17, $x_13, $x_12, $x_9, $x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_7).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_6.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_5, $x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_3).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$43, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])));
});
$c_Llivechart_Main$.prototype.renderExerciseMC__T__sci_List__I__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(taskText, choices, index, chapter) {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
  if ((!(this$3 === ""))) {
    var storedData = this.loadFromLocalStorage__T__s_Option(chapter);
  } else {
    var storedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedData);
  if (this$4.isEmpty__Z()) {
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$4.get__O();
    var _$14 = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0);
    var this$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$14).Llivechart_Main$ChapterData__f_exercises);
  }
  if (this$5.isEmpty__Z()) {
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  } else {
    var $x_1 = this$5.get__O();
  }
  var storedAnswers = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($x_1);
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedAnswers);
  _return: {
    var these = this$7;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var _$15 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$15).Llivechart_Main$ExerciseResponse__f_task === taskText)) {
        var this$8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O());
        break _return;
      }
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
    }
    var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  if (this$8.isEmpty__Z()) {
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0$2 = this$8.get__O();
    var _$16 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$2);
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$16).Llivechart_Main$ExerciseResponse__f_answer;
  }
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2);
  var storedAnswer = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$9.isEmpty__Z() ? "" : this$9.get__O()));
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedAnswer);
  if ((!(this$12 === ""))) {
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
    var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedAnswer);
    var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__split__T__I__AT(this$13, ", ", 0);
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var i = 0;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length)) {
      var x1 = i;
      var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(x1);
      var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(choices);
      var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$19)));
      _return$1: {
        var these$1 = this$20;
        while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).isEmpty__Z())) {
          var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).head__O();
          var _$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x0$4);
          var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$17)._1__O()))._1__O();
          if (((x === null) ? (x0$3 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_equals__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x), x0$3))) {
            var this$21 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).head__O());
            break _return$1;
          }
          these$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).tail__O());
        }
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      }
      if (this$21.isEmpty__Z()) {
        var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      } else {
        var x0$5 = this$21.get__O();
        var _$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x0$5);
        var elems$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$18)._2__O()));
      }
      var it = elems$1.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
        var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
        var unboxedElem = ((elem === null) ? 0 : elem);
        jsElems.push(unboxedElem);
      }
      i = ((1 + i) | 0);
    }
    var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_3.wrapIntArray__AI__scm_ArraySeq$ofInt(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array(jsElems))));
    var initialSelected = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$22);
  } else {
    var initialSelected = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$EmptySet$();
  }
  var selectedVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(initialSelected);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_className).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("exercise-content");
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  if ((index === (-1))) {
    var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$24, "Aufgabe", r);
  } else {
    var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var value = ("Aufgabe " + index);
    var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$25, value, r$1);
  }
  var $x_25 = $x_28.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_26])));
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_22 = $x_24.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_23.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$26, taskText, r$2)])));
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_state_Val$().apply__O__Lcom_raquo_airstream_state_Val(choices)));
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$19) => {
    var _$19$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(_$19);
    var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$19$1);
    var this$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$30)));
    var f = ((x$1) => {
      var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
      if ((x$1$1 !== null)) {
        var x37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
        if ((x37 !== null)) {
          var label = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x37)._1__O());
          var idx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
          var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("checkbox");
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onChange__Lcom_raquo_laminar_keys_EventProp();
          var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
          var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$20) => {
            var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selectedVar);
            var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => {
              var selected$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(selected);
              if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$1).contains__O__Z(idx)) {
                var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$1);
                return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(this$32.excl__O__sci_SetOps(idx));
              } else {
                var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$1);
                return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(this$33.incl__O__sci_SetOps(idx));
              }
            }));
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$34, mod);
          }));
          var $x_14 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$35, onNext);
          var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).checked__Lcom_raquo_laminar_keys_HtmlProp();
          var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selectedVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
          var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$21) => {
            var _$21$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(_$21);
            return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$21$1).contains__O__Z(idx);
          }));
          var $x_12 = $x_17.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_15, $x_14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_13).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$36, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()))])));
          var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag();
          var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var value$1 = (" " + label);
          var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
          return $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_12, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_11).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_10.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$37, value$1, r$3)])))])));
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
    });
    if ((this$38 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$6 = this$38.head__O();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$6), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$38.tail__O());
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$7), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
      }
      return h;
    }
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$39, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_9 = $x_21.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_20.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$41, "Abgeben", r$4);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$67 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$22) => {
    var this$43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selectedVar);
    var this$44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$43.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var selected$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$44.tryNow__s_util_Try()).get__O());
    var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
    if ((!(this$47 === ""))) {
      var this$49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$2).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((idx$1) => {
        var idx$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(idx$1);
        var this$48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(choices);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$48, idx$2)))._1__O());
      })))));
      var selectedChoices = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$49, "", ", ", "");
      var this$63 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_allResponsesVar);
      var mod$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
        var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(data);
        var existing = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1).getOrElse__O__F0__O(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
          var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
          var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
          var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "");
          return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, exercises, rating);
        }))));
        var this$53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing).Llivechart_Main$ChapterData__f_exercises);
        var f$1 = ((_$23) => {
          var _$23$1 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(_$23);
          return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$23$1).Llivechart_Main$ExerciseResponse__f_task === taskText);
        });
        var l = this$53;
        block: {
          var result;
          while (true) {
            if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).isEmpty__Z()) {
              var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
              break;
            } else {
              var h$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).head__O();
              var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).tail__O());
              if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$1(h$1)) === true)) {
                l = t$1;
                continue;
              }
              var start = l;
              var remaining = t$1;
              while (true) {
                if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).isEmpty__Z()) {
                  var result = start;
                  break block;
                } else {
                  var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).head__O();
                  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$1(x$2)) !== true)) {
                    remaining = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).tail__O());
                    continue;
                  }
                  var firstMiss = remaining;
                  var newHead = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                  var toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).tail__O());
                  var currentLast = newHead;
                  while ((toProcess !== firstMiss)) {
                    var newElem = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem;
                    currentLast = newElem;
                    toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).tail__O());
                  }
                  var next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(firstMiss).tail__O());
                  var nextToCopy = next;
                  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).isEmpty__Z())) {
                    var head = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).head__O();
                    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$1(head)) !== true)) {
                      next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                    } else {
                      while ((nextToCopy !== next)) {
                        var newElem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                        currentLast = newElem$2;
                        nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).tail__O());
                      }
                      nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                      next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                    }
                  }
                  if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).isEmpty__Z())) {
                    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = nextToCopy;
                  }
                  var result = newHead;
                  break block;
                }
              }
            }
          }
        }
        var this$56 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
        var answer = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(selectedChoices);
        var elem$1 = new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(taskText, answer);
        var updatedExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(this$56, elem$1));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var this$57 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var chapter$1 = this$57.Llivechart_Main$ChapterData__f_chapter;
        var this$58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var rating$1 = this$58.Llivechart_Main$ChapterData__f_rating;
        var updatedChapter = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$1, updatedExercises, rating$1);
        this.saveToLocalStorage__T__Llivechart_Main$ChapterData__V(chapter, updatedChapter);
        var this$62 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(this$62.updated__O__O__sci_MapOps(chapter, updatedChapter));
      }));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$63, mod$1);
    }
    return selected$2;
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected$3) => {
    var selected$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(selected$3);
    var this$64 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(choices);
    var this$65 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$64))).collect__s_PartialFunction__sci_List(new $j_livechart$002e$002dMain$0024$0024anon$00242.$c_Llivechart_Main$$anon$2()));
    var correctIndices = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$65);
    return ((selected$4 === null) ? (correctIndices === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$4).equals__O__Z(correctIndices));
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ok) => {
    var ok$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(ok);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(ok$1);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$67, onNext$1);
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$68 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$2);
    if ((x$1$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$3)).s_Some__f_value);
      if ((x55 === true)) {
        return "btn-success";
      }
      if ((x55 === false)) {
        return "btn-error";
      }
    }
    var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$3 === x$1$3)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  }));
  return $x_31.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_30.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_29, $x_25, $x_22, $x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_8).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_6, $x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_4).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$68, project$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])));
});
$c_Llivechart_Main$.prototype.Infotext__T__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(title, text) {
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("infotext");
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_3 = $x_5.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, title, r)])));
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  return $x_8.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_6, $x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$2, text, r$1)])))])));
});
$c_Llivechart_Main$.prototype.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement = (function(minutes) {
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("time-badge");
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var value = (("\u23f1 ca. " + minutes) + " min");
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  return $x_5.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, value, r)])))])));
});
$c_Llivechart_Main$.prototype.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(currentHash) {
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#einfuehrung", "Einf\u00fchrung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#nachricht", "Nachrichten schreiben"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#maskierung", "Maskierung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#fehlerkorrektur", "Fehlerkorrektur"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#anwendung", "Anwendung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#zusammenfassung", "Zusammenfassung")]));
  var chapters = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapters);
  _return: {
    var i = 0;
    var these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this$8, 0, this$8);
    while (true) {
      var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these);
      if ((!this$11.isEmpty__Z())) {
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
        var _$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x0);
        var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$25)._1__O();
        if (((x === null) ? (currentHash === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_equals__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x), currentHash))) {
          var currentIndex = i;
          break _return;
        }
        i = ((1 + i) | 0);
        these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_LinearSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
      } else {
        break;
      }
    }
    var currentIndex = (-1);
  }
  var hasPrev = (currentIndex > 0);
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapters);
  var hasNext = (currentIndex < (((-1) + this$12.length__I()) | 0));
  if (hasPrev) {
    var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapters);
    var n = (((-1) + currentIndex) | 0);
    var prevChapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$13, n));
  } else {
    var prevChapter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("", "");
  }
  if (hasNext) {
    var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapters);
    var n$1 = ((1 + currentIndex) | 0);
    var nextChapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$15, n$1));
  } else {
    var nextChapter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("", "");
  }
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("chapter-navigation");
  if (hasPrev) {
    var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).a__Lcom_raquo_laminar_tags_HtmlTag());
    var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).href__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(prevChapter)._1__O());
    var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
    var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var value = ("\u2190 " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(prevChapter)._2__O());
    var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_7 = $x_12.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_9).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$17, value, r), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("btn-primary")])))])));
  } else {
    var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([])));
  }
  if (hasNext) {
    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).a__Lcom_raquo_laminar_tags_HtmlTag());
    var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).href__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextChapter)._1__O());
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var value$1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextChapter)._2__O()) + " \u2192");
    var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_1 = $x_6.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_3).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_2.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$18, value$1, r$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("btn-primary")])))])));
  } else {
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([])));
  }
  return $x_15.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_14.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_13, $x_7, $x_1])));
});
$c_Llivechart_Main$.prototype.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(chapter) {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
  if ((!(this$3 === ""))) {
    var storedData = this.loadFromLocalStorage__T__s_Option(chapter);
  } else {
    var storedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedData);
  if (this$4.isEmpty__Z()) {
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$4.get__O();
    var _$26 = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0);
    var this$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$26).Llivechart_Main$ChapterData__f_rating);
  }
  var storedRating = $j_livechart$002e$002dMain$0024$002dRating$002dData.$as_Llivechart_Main$RatingData((this$5.isEmpty__Z() ? new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "") : this$5.get__O()));
  var understandingVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedRating).Llivechart_Main$RatingData__f_understanding);
  var difficultyVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedRating).Llivechart_Main$RatingData__f_difficulty);
  var qualityVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedRating).Llivechart_Main$RatingData__f_quality);
  var scopeVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedRating).Llivechart_Main$RatingData__f_scope);
  var feedbackVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedRating).Llivechart_Main$RatingData__f_feedback);
  var $x_56 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_54 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-component");
  var $x_53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_51 = $x_53.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_52.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$7, "Bewertung dieses Kapitels", r)])));
  var $x_50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-category");
  var $x_47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_45 = $x_47.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_46.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$8, "Ich habe den Inhalt verstanden", r$1)])));
  var $x_44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-hint");
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_41 = $x_50.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_49.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_48, $x_45, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_44).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_43.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_42, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$9, "5 Sterne = vollst\u00e4ndige Zustimmung, 1 Stern = \u00fcberhaupt nicht", r$2)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, understandingVar, 5)])));
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-category");
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_35 = $x_37.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_36.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$10, "Die Schwierigkeit der Inhalte war", r$3)])));
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-hint");
  var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_31 = $x_40.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_39.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_38, $x_35, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_34).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_33.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_32, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$11, "5 Sterne = sehr schwierig, 1 Stern = sehr leicht", r$4)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, difficultyVar, 5)])));
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-category");
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_25 = $x_27.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_26.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$12, "Die Aufgaben haben mir Spa\u00df gemacht", r$5)])));
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-hint");
  var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_21 = $x_30.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_29.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_28, $x_25, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_24).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_23.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_22, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$13, "5 Sterne = viel Spa\u00df, 1 Stern = wenig Spa\u00df", r$6)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, qualityVar, 5)])));
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-category");
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_15 = $x_17.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$14, "Der Umfang der Aufgaben war angemessen", r$7)])));
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-hint");
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_11 = $x_20.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_19.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_18, $x_15, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_14).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_13.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_12, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$15, "5 Sterne = Die Aufgaben hatten eine gute L\u00e4nge, 1 Stern = Die Aufgaben waren zu lang/zu kurz", r$8)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, scopeVar, 5)])));
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-category");
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_5 = $x_7.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_6.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$16, "Zus\u00e4tzliche Anmerkungen:", r$9)])));
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).textArea__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).rows__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(4);
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("Deine Anmerkungen hier...");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var text$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(text);
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$18, text$1);
    var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
    if ((!(this$21 === ""))) {
      var this$40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_allResponsesVar);
      var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
        var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(data);
        var existing = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1).getOrElse__O__F0__O(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
          var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
          var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
          var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "");
          return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, exercises, rating);
        }))));
        var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(understandingVar);
        var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$25.Lcom_raquo_airstream_state_SourceVar__f_signal);
        var understanding = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$26.tryNow__s_util_Try()).get__O());
        var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(difficultyVar);
        var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$27.Lcom_raquo_airstream_state_SourceVar__f_signal);
        var difficulty = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$28.tryNow__s_util_Try()).get__O());
        var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(qualityVar);
        var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$29.Lcom_raquo_airstream_state_SourceVar__f_signal);
        var quality = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$30.tryNow__s_util_Try()).get__O());
        var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(scopeVar);
        var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$31.Lcom_raquo_airstream_state_SourceVar__f_signal);
        var scope = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$32.tryNow__s_util_Try()).get__O());
        var updatedRating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(understanding, difficulty, quality, scope, text$1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var chapter$1 = this$34.Llivechart_Main$ChapterData__f_chapter;
        var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var exercises$1 = this$35.Llivechart_Main$ChapterData__f_exercises;
        var updatedChapter = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$1, exercises$1, updatedRating);
        this.saveToLocalStorage__T__Llivechart_Main$ChapterData__V(chapter, updatedChapter);
        var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(this$39.updated__O__O__sci_MapOps(chapter, updatedChapter));
      }));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$40, mod);
    }
  }));
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$41, onNext);
  return $x_56.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_55.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_54, $x_51, $x_41, $x_31, $x_21, $x_11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_10).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_8, $x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_4).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener, updater)])))])))])));
});
var $d_Llivechart_Main$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Main$, "livechart.Main$", ({
  Llivechart_Main$: 1
}));
export { $d_Llivechart_Main$ as $d_Llivechart_Main$ };
var $n_Llivechart_Main$;
function $m_Llivechart_Main$() {
  if ((!$n_Llivechart_Main$)) {
    $n_Llivechart_Main$ = new $c_Llivechart_Main$();
  }
  return $n_Llivechart_Main$;
}
export { $m_Llivechart_Main$ as $m_Llivechart_Main$ };
//# sourceMappingURL=livechart.-Main$.js.map
