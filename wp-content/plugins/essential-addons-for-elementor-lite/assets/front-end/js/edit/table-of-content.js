/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/edit/table-of-content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/edit/table-of-content.js":
/*!*****************************************!*\
  !*** ./src/js/edit/table-of-content.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("eael.hooks.addAction(\"editMode.init\", \"ea\", function () {\n  elementor.settings.page.addChangeCallback(\"eael_ext_table_of_content\", function (newValue) {\n    elementor.settings.page.setSettings(\"eael_ext_table_of_content\", newValue);\n    elementor.saver.update.apply().then(function () {\n      elementor.reloadPreview();\n    });\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_toc_position\", function (newValue) {\n    var selector = jQuery(\"#eael-toc\");\n    if (newValue === \"right\") {\n      selector.addClass(\"eael-toc-right\");\n    } else {\n      selector.removeClass(\"eael-toc-right\");\n      selector.addClass(\"eael-toc-left\");\n    }\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_table_of_content_list_style\", function (newValue) {\n    var list = jQuery(\".eael-toc-list\");\n    list.removeClass(\"eael-toc-list-bar eael-toc-list-arrow\");\n    if (newValue !== \"none\") {\n      list.addClass(\"eael-toc-list-\" + newValue);\n    }\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_toc_collapse_sub_heading\", function (newValue) {\n    var list = jQuery(\".eael-toc-list\");\n    if (newValue === \"yes\") {\n      list.addClass(\"eael-toc-collapse\");\n    } else {\n      list.removeClass(\"eael-toc-collapse\");\n    }\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_table_of_content_header_icon\", function (newValue) {\n    var iconElement = $(\".eael-toc-button i\");\n    iconElement.removeClass().addClass(newValue.value);\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_toc_list_icon\", function (newValue) {\n    var list = jQuery(\".eael-toc-list\");\n    if (newValue === \"number\") {\n      list.addClass(\"eael-toc-number\").removeClass(\"eael-toc-bullet\");\n    } else {\n      list.addClass(\"eael-toc-bullet\").removeClass(\"eael-toc-number\");\n    }\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_toc_word_wrap\", function (newValue) {\n    var list = jQuery(\".eael-toc-list\");\n    if (newValue === \"yes\") {\n      list.addClass(\"eael-toc-word-wrap\");\n    } else {\n      list.removeClass(\"eael-toc-word-wrap\");\n    }\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_toc_close_button_text_style\", function (newValue) {\n    var toc = jQuery(\"#eael-toc\");\n    if (newValue === \"bottom_to_top\") {\n      toc.addClass(\"eael-bottom-to-top\");\n    } else {\n      toc.removeClass(\"eael-bottom-to-top\");\n    }\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_toc_box_shadow\", function (newValue) {\n    var toc = jQuery(\"#eael-toc\");\n    if (newValue === \"yes\") {\n      toc.addClass(\"eael-box-shadow\");\n    } else {\n      toc.removeClass(\"eael-box-shadow\");\n    }\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_toc_auto_collapse\", function (newValue) {\n    var toc = jQuery(\"#eael-toc\");\n    if (newValue === \"yes\") {\n      toc.addClass(\"eael-toc-auto-collapse collapsed\");\n    } else {\n      toc.removeClass(\"eael-toc-auto-collapse collapsed\");\n    }\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_toc_auto_highlight\", function (newValue) {\n    var tocList = jQuery(\"#eael-toc-list\");\n    if (newValue === \"yes\") {\n      tocList.addClass(\"eael-toc-auto-highlight\");\n    } else {\n      tocList.removeClass(\"eael-toc-auto-highlight\");\n    }\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_toc_auto_highlight_single_item_only\", function (newValue) {\n    var tocList = jQuery(\"#eael-toc-list\");\n    if (newValue === \"yes\") {\n      if (tocList.hasClass(\"eael-toc-auto-highlight\")) {\n        tocList.addClass(\"eael-toc-highlight-single-item\");\n      }\n    } else {\n      tocList.removeClass(\"eael-toc-highlight-single-item\");\n    }\n  });\n  elementor.settings.page.addChangeCallback(\"eael_ext_toc_title\", function (newValue) {\n    elementorFrontend.elements.$document.find(\".eael-toc-title\").text(newValue);\n    elementorFrontend.elements.$document.find(\".eael-toc-button span\").text(newValue);\n  });\n});\n\n//# sourceURL=webpack:///./src/js/edit/table-of-content.js?");

/***/ })

/******/ });