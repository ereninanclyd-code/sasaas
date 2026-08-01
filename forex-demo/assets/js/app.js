const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
document.addEventListener('DOMContentLoaded',()=>{
 const page=document.body.dataset.page;
 $$('.nav a,.bottom-nav a').forEach(a=>a.dataset.page===page&&a.classList.add('active'));
 const logout=$('#logout'); if(logout) logout.onclick=()=>location.href='../index.html';
 const login=$('#loginForm'); if(login) login.onsubmit=e=>{e.preventDefault();sessionStorage.setItem('demo-login','1');location.href='pages/dashboard.html'};
 const chart=$('#chart'); if(chart){[32,41,38,50,47,61,57,70,65,73,68,81,75,87,80,91,86,95,89,98].forEach(v=>{let b=document.createElement('div');b.className='bar';b.style.height=v+'%';b.title=v+' puan';chart.appendChild(b)})}

 const depositFlow=$('#depositFlowForm'); if(depositFlow) depositFlow.onsubmit=e=>{e.preventDefault();const amount=$('#depositAmount').value;const currency=$('#depositCurrency').value;if(!amount||Number(amount)<=0)return;sessionStorage.setItem('demo-deposit-amount',amount);sessionStorage.setItem('demo-deposit-currency',currency);location.href='iban.html'};
 const selected=$('#selectedDepositAmount'); if(selected){const a=sessionStorage.getItem('demo-deposit-amount');const c=sessionStorage.getItem('demo-deposit-currency')||'TRY';selected.textContent=a?new Intl.NumberFormat('tr-TR',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(a))+' '+c:'Tutar seçilmedi'}
 const done=$('#paymentDoneBtn'); if(done) done.onclick=()=>{sessionStorage.removeItem('demo-deposit-amount');sessionStorage.removeItem('demo-deposit-currency');location.href='dashboard.html'};
 const withdraw=$('#withdrawBtn'); if(withdraw) withdraw.onclick=()=>$('#withdrawModal').classList.add('open');
 $$('[data-close]').forEach(x=>x.onclick=()=>x.closest('.modal').classList.remove('open'));
 $$('form[data-demo]').forEach(f=>f.onsubmit=e=>{e.preventDefault();alert('Bu bir arayüz prototipidir. Gerçek para transferi veya emir işlemi gerçekleştirilmedi.')});
 const sidebar=$('.sidebar');
 if(sidebar){
   const btn=document.createElement('button');btn.className='mobile-menu-btn';btn.setAttribute('aria-label','Menüyü aç');btn.innerHTML='☰';
   const top=$('.topbar'); if(top) top.prepend(btn);
   const backdrop=document.createElement('div');backdrop.className='mobile-backdrop';document.body.appendChild(backdrop);
   const close=()=>{sidebar.classList.remove('open');backdrop.classList.remove('open')};
   btn.onclick=()=>{sidebar.classList.toggle('open');backdrop.classList.toggle('open')};backdrop.onclick=close;
   $$('.sidebar a').forEach(a=>a.addEventListener('click',close));
 }
});
