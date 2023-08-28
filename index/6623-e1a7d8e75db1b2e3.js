"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6623], {
        8787: function(r, e, t) {
            t.d(e, {
                Z: function() {
                    return h
                }
            });
            var n = t(5893),
                o = t(1664),
                a = t.n(o),
                s = t(3795),
                i = t(5861),
                c = t(1214),
                l = t(6822),
                d = t(668);

            function h() {
                return (0, n.jsx)(c.Z, {
                    component: "footer",
                    maxWidth: !1,
                    sx: {
                        padding: "16px 0",
                        px: {
                            xs: 3,
                            sm: 24,
                            md: 32
                        },
                        paddingTop: 2,
                        paddingBottom: 5,
                        marginTop: "auto",
                        backgroundColor: "transparent",
                        borderTop: "1px solid ".concat(d.Z.palette.primary.main)
                    },
                    children: (0, n.jsxs)(l.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: {
                                xs: "column",
                                sm: "row"
                            },
                            justifyContent: "space-between",
                            alignItems: {
                                sm: "center"
                            },
                            flexWrap: "wrap"
                        },
                        children: [(0, n.jsxs)(l.Z, {
                            sx: {
                                display: {
                                    xs: "none",
                                    sm: "flex"
                                },
                                flexDirection: "column",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                marginBottom: "auto",
                                maxWidth: "30%"
                            },
                            children: [(0, n.jsx)(i.Z, {
                                variant: "h6",
                                color: "text.secondary",
                                sx: {
                                    fontWeight: "bold"
                                },
                                children: "와라.COM / 발로란트.NET"
                            }), (0, n.jsx)(i.Z, {
                                variant: "body2",
                                color: "text.secondary",
                                sx: {
                                    wordWrap: "break-all"
                                },
                                children: "와라.COM은 발로란트 / 배틀그라운드 / 서든어택 / 각종 FPS게임의 랭커용 방송용 제품을 판매하고 있습니다."
                            })]
                        })]
                    })
                })
            }
        },
        3177: function(r, e, t) {
            t.d(e, {
                Z: function() {
                    return D
                }
            });
            var n = t(7568),
                o = t(655),
                a = t(5893),
                s = t(7294),
                i = t(1664),
                c = t.n(i),
                l = t(4927),
                d = t(4492),
                h = t(9944),
                x = t(326),
                u = t(6822),
                f = t(155),
                p = t(1214),
                m = t(2293),
                j = t(5861),
                b = t(3321),
                g = t(3946),
                Z = t(4347),
                y = t(8972),
                v = t(8885),
                k = t(2607),
                w = t(4842),
                C = t(8298),
                W = t(6216),
                _ = t(3795);

            function S() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        children: (0, a.jsx)("div", {
                            style: {
                                backgroundColor: "transparent"
                            }
                        })
                    },
                    e = r.children,
                    t = r.window,
                    n = (0, C.Z)({
                        disableHysteresis: !0,
                        threshold: 0,
                        target: t ? t() : void 0
                    });
                return (0, s.cloneElement)(e, {
                    elevation: n ? 4 : 0
                })
            }

            function D() {
                var r = (0, s.useState)({
                        text: "구매",
                        href: "http://xn--oi2b03z.com/"
                    }),
                    e = r[0],
                    t = r[1],
                    i = (0, s.useState)(null),
                    C = i[0],
                    D = i[1],
                    T = Boolean(C),
                    R = function() {
                        return D(null)
                    },
                    B = function() {
                        var r = (0, n.Z)((function() {
                            var r, e, n;
                            return (0, o.__generator)(this, (function(o) {
                                return localStorage.getItem("token") && (e = null === (r = null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem("token")) || void 0 === r ? void 0 : r.split(".")) ? !(n = JSON.parse(atob(e[1]))).id && new Date(1e3 * n.exp) < new Date ? t({
                                    text: "구매",
                                    href: "http://xn--oi2b03z.com/"
                                }) : t({
                                    text: "구매",
                                    href: "http://xn--oi2b03z.com/"
                                }) : t({
                                    text: "구매",
                                    href: "http://xn--oi2b03z.com/"
                                }), [2]
                            }))
                        }));
                        return function() {
                            return r.apply(this, arguments)
                        }
                    }();
                return (0, s.useEffect)((function() {
                    B(), window.addEventListener("storage", function() {
                        var r = (0, n.Z)((function(r) {
                            return (0, o.__generator)(this, (function(r) {
                                return B(), [2]
                            }))
                        }));
                        return function(e) {
                            return r.apply(this, arguments)
                        }
                    }());
                    try {
                        localStorage.getItem("token") && B()
                    } catch (r) {
                        console.error(r)
                    }
                }), []), (0, a.jsx)(u.Z, {
                    sx: {
                        marginBottom: "6rem"
                    },
                    children: (0, a.jsx)(S, {
                        children: (0, a.jsx)(m.Z, {
                            component: "nav",
                            sx: {
                                backgroundColor: "transparent",
                                width: {
                                    xs: "90%",
                                    sm: "85%",
                                    md: "65%",
                                    lg: "50%"
                                },
                                left: "50%",
                                transform: "translate(-50%, 0)",
                                boxShadow: "none",
                                top: "1rem",
                                borderRadius: "1.25rem",
                                backgroundImage: "none",
                                background: "rgba(15,15,15,0.5)",
                                border: "1px solid rgba(255,255,255,0.1)"
                            },
                            children: (0, a.jsx)(p.Z, {
                                maxWidth: "lg",
                                sx: {
                                    backdropFilter: "blur(1rem)",
                                    borderRadius: "1.25rem"
                                },
                                children: (0, a.jsxs)(f.Z, {
                                    children: [(0, a.jsx)(j.Z, {
                                        variant: "h6",
                                        component: "div",
                                        sx: {
                                            display: {
                                                xs: "none",
                                                md: "block"
                                            },
                                            cursor: "pointer",
                                            flexGrow: 1
                                        },
                                        children: (0, a.jsx)(_.Z, {
                                            href: "/",
                                            color: "text.primary",
                                            sx: {
                                                textDecoration: "none"
                                            },
                                            children: "와라편의점"
                                        })
                                    }), (0, a.jsxs)(u.Z, {
                                        sx: {
                                            display: {
                                                xs: "block",
                                                md: "none"
                                            },
                                            flexGrow: 1
                                        },
                                        children: [(0, a.jsx)(g.Z, {
                                            id: "menu-btn",
                                            edge: "start",
                                            color: "inherit",
                                            "aria-label": "menu",
                                            "aria-controls": T ? "menu" : void 0,
                                            "aria-haspopup": "true",
                                            "aria-expanded": T ? "true" : void 0,
                                            onClick: function(r) {
                                                return D(r.currentTarget)
                                            },
                                            children: (0, a.jsx)(x.Z, {})
                                        }), (0, a.jsxs)(Z.Z, {
                                            id: "menu",
                                            anchorEl: C,
                                            open: T,
                                            onClose: R,
                                            MenuListProps: {
                                                "aria-labelledby": "menu-btn"
                                            },
                                            children: [(0, a.jsx)(y.Z, {
                                                onClick: R,
                                                children: (0, a.jsxs)(k.Z, {
                                                    href: "https://t.me/wara_store",
                                                    children: [(0, a.jsx)(v.Z, {
                                                        children: (0, a.jsx)(h.Z, {})
                                                    }), (0, a.jsx)(w.Z, {
                                                        children: "텔레그램"
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsx)(c(), {
                                        href: "/",
                                        children: (0, a.jsx)(j.Z, {
                                            variant: "h6",
                                            component: "div",
                                            sx: {
                                                display: {
                                                    xs: "block",
                                                    md: "none"
                                                },
                                                cursor: "pointer",
                                                flexGrow: 1
                                            },
                                            children: "와라편의점"
                                        })
                                    }), (0, a.jsx)(u.Z, {
                                        sx: {
                                            display: {
                                                xs: "none",
                                                md: "block"
                                            }
                                        },
                                        children: (0, a.jsxs)(W.Z, {
                                            direction: "row",
                                            spacing: 1,
                                            children: [(0, a.jsx)(b.Z, {
                                                href: "https://t.me/wara_store",
                                                children: "텔레그램"
                                            })]
                                        })
                                    }), (0, a.jsx)(c(), {
                                        href: e.href,
                                        children: (0, a.jsx)(b.Z, {
                                            href: e.href,
                                            variant: "contained",
                                            color: "primary",
                                            sx: {
                                                ml: 1
                                            },
                                            children: e.text
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        }
    }
]);