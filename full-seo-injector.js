// Blogger Ultra SEO & Engagement Injector (Improved)
(function () {
  const getText = (selector) => document.querySelector(selector)?.innerText?.trim() || "";
  const getAttr = (selector, attr) => document.querySelector(selector)?.getAttribute(attr) || "";

  const title = getText("h1.post-title") || document.title || "MaxClickEmpire – Affiliate Marketing, Google Docs Templates, AI Tools";
  const description = document.querySelector("meta[name='description']")?.content?.trim() || "MaxClickEmpire empowers creators and marketers with proven affiliate marketing strategies, AI-powered productivity tools, Google Docs resume & planner templates, blogging monetization hacks, SEO tips, and digital business blueprints.";
  const url = window.location.href;
  const author = "Ogunlana Akinola Okikiola";
  const logo = "https://www.maxclickempire.com/favicon.ico";
  const image = document.querySelector(".post-body img")?.src || logo;
  const publishedTime = getAttr("abbr.published", "title") || new Date().toISOString();
  const modifiedTime = new Date().toISOString();
  const isHome = location.pathname === "/";

  // --- Remove Existing Conflicting Meta Tags ---
  const metaNames = ["og:title", "og:description", "og:url", "og:type", "twitter:title", "twitter:description", "twitter:image", "twitter:card"];
  metaNames.forEach(name => {
    document.querySelectorAll(`meta[property='${name}'], meta[name='${name}']`).forEach(el => el.remove());
  });

  // --- Meta Tag Injection ---
  const metas = [
    { name: "description", content: description },
    { name: "author", content: author },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: isHome ? "website" : "article" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image }
  ];
  metas.forEach(tag => {
    const meta = document.createElement("meta");
    Object.entries(tag).forEach(([k, v]) => meta.setAttribute(k, v));
    document.head.appendChild(meta);
  });

  // --- JSON-LD BlogPosting Schema ---
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "author": { "@type": "Person", "name": author },
    "datePublished": publishedTime,
    "dateModified": modifiedTime,
    "image": image,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "publisher": {
      "@type": "Organization",
      "name": "MaxClickEmpire",
      "logo": { "@type": "ImageObject", "url": logo }
    }
  };
  const blogScript = document.createElement("script");
  blogScript.type = "application/ld+json";
  blogScript.textContent = JSON.stringify(blogSchema);
  document.head.appendChild(blogScript);

  // --- FAQ Schema Markup ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is MaxClickEmpire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaxClickEmpire is a platform providing affiliate marketing strategies, Google Docs tools, and productivity guides."
        }
      },
      {
        "@type": "Question",
        "name": "How do I make money with MaxClickEmpire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can follow guides on monetization, use Google Docs templates, and learn affiliate strategies."
        }
      }
    ]
  };
  const faqScript = document.createElement("script");
  faqScript.type = "application/ld+json";
  faqScript.textContent = JSON.stringify(faqSchema);
  document.head.appendChild(faqScript);

  // --- Dynamic Table of Contents ---
  const headings = document.querySelectorAll(".post-body h2, .post-body h3");
  if (headings.length) {
    const toc = document.createElement("div");
    toc.id = "toc";
    toc.innerHTML = '<h2>📑 Table of Contents</h2><ul></ul>';
    const ul = toc.querySelector("ul");

    headings.forEach((heading, index) => {
      const id = `toc-${index}`;
      heading.id = id;
      const li = document.createElement("li");
      li.innerHTML = `<a href="#${id}">${heading.innerText}</a>`;
      ul.appendChild(li);
    });

    document.querySelector(".post-body")?.prepend(toc);
  }

  // --- Internal Keyword Linking ---
  const relatedLinks = [
    { keyword: "Google Docs", url: "/2025/06/google-docs-template-guide.html" },
    { keyword: "affiliate marketing", url: "/2025/06/affiliate-marketing-for-beginners.html" },
    { keyword: "OpenAI", url: "/2025/06/openai-tools-for-bloggers.html" }
  ];
  const paragraphs = document.querySelectorAll(".post-body p");
  paragraphs.forEach(p => {
    relatedLinks.forEach(({ keyword, url }) => {
      const regex = new RegExp(`\\b(${keyword})\\b(?!([^<]+)?>)`, 'gi');
      if (!p.innerHTML.includes(url)) {
        p.innerHTML = p.innerHTML.replace(regex, `<a href="${url}">$1</a>`);
      }
    });
  });

  // --- Ad Insertion ---
  const adHTML = `
    <div class="injected-ad" style="text-align:center;margin:20px 0">
      <!-- Replace with your AdSense Code -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-xxxxxxxxxx"
           data-ad-slot="1234567890"
           data-ad-format="auto"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>`;
  if (paragraphs.length > 2) {
    paragraphs[2].insertAdjacentHTML("afterend", adHTML);
  }

  // --- Google Analytics Injector ---
  const analyticsID = "G-8CJ4YJYMSV"; // Replace with your GA4 ID
  if (analyticsID) {
    const gtagScript = document.createElement("script");
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsID}`;
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const configScript = document.createElement("script");
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${analyticsID}');
    `;
    document.head.appendChild(configScript);
  }
})();

<!-- ✅ MaxClickEmpire Full SEO Structured Data Injection -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [

    /* 📝 BlogPosting Schema */
    {
      "@type": "BlogPosting",
      "headline": "MaxClickEmpire – Affiliate Marketing, Google Docs Templates, AI Tools",
      "description": "MaxClickEmpire empowers creators and marketers with proven affiliate marketing strategies, AI-powered productivity tools, Google Docs resume & planner templates, blogging monetization hacks, SEO tips, and digital business blueprints.",
      "author": {
        "@type": "Person",
        "name": "Ogunlana Akinola Okikiola"
      },
      "datePublished": "2025-06-25T00:00:00Z",
      "dateModified": "2025-06-25T00:00:00Z",
      "image": "https://www.maxclickempire.com/favicon.ico",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.maxclickempire.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "MaxClickEmpire",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.maxclickempire.com/favicon.ico"
        }
      }
    },

    /* 🧭 BreadcrumbList Schema */
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.maxclickempire.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog Post Title",
          "item": "https://www.maxclickempire.com/2025/06/example-blog-post.html"
        }
      ]
    },

    /* ❓ FAQPage Schema */
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is MaxClickEmpire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MaxClickEmpire is a platform providing affiliate marketing strategies, Google Docs tools, and productivity guides."
          }
        },
        {
          "@type": "Question",
          "name": "How do I make money with MaxClickEmpire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can follow guides on monetization, use Google Docs templates, and learn affiliate strategies."
          }
        }
      ]
    }

  ]
}
</script>
