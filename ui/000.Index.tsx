import React from 'react'

function Index() {
  return (
    <div className="bg-background text-on-background font-body-base antialiased min-h-screen flex flex-col md:flex-row overflow-x-hidden">
      {/* SideNavBar */}
      <nav className="hidden md:flex w-64 h-screen fixed left-0 top-0 border-r-2 border-outline bg-surface-container shadow-[2px_0_0_0_rgba(255,255,255,0.1)] inner-shadow-sm flex-col pt-20 pb-4 z-40">
        <div className="px-gutter mb-8">
          <h1 className="font-headline-md text-headline-md text-secondary tracking-tight">TEST_SUITE_01</h1>
          <p className="font-data-mono text-data-mono text-on-surface-variant mt-2 uppercase">X-CORE KERNEL ACTIVE</p>
          <div className="w-full h-px bg-outline mt-4 opacity-50"></div>
        </div>
        <ul className="flex-1 overflow-y-auto w-full">
          {/* Active Tab */}
          <li>
            <a className="flex items-center px-gutter py-3 bg-secondary-container text-on-secondary-container shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)] rounded-none border-l-4 border-secondary transition-all duration-200 ease-in-out group" href="#">
              <span className="material-symbols-outlined mr-3" style={{ fontVariationSettings: "'FILL' 1" }}>image</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Module A: Raster</span>
            </a>
          </li>
          {/* Inactive Tabs */}
          <li>
            <a className="flex items-center px-gutter py-3 text-on-surface-variant border-l-4 border-transparent hover:bg-surface-container-high hover:text-primary transition-all duration-200 ease-in-out group" href="#">
              <span className="material-symbols-outlined mr-3">brush</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Module B: Vector</span>
            </a>
          </li>
          <li>
            <a className="flex items-center px-gutter py-3 text-on-surface-variant border-l-4 border-transparent hover:bg-surface-container-high hover:text-primary transition-all duration-200 ease-in-out group" href="#">
              <span className="material-symbols-outlined mr-3">blur_on</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Module C: Shaders</span>
            </a>
          </li>
          <li>
            <a className="flex items-center px-gutter py-3 text-on-surface-variant border-l-4 border-transparent hover:bg-surface-container-high hover:text-primary transition-all duration-200 ease-in-out group" href="#">
              <span className="material-symbols-outlined mr-3">movie</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Module D: Motion</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* TopAppBar */}
        <header className="bg-surface docked full-width top-0 border-b-2 border-outline shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset] flex justify-between items-center px-margin-panel py-unit h-16 w-full z-30 sticky">
          <div className="flex items-center gap-4">
            <span className="font-display-lg text-display-lg uppercase tracking-tighter text-primary">PIXI_CORE v1.0</span>
          </div>
        </header>

        {/* Dashboard Canvas */}
        <div className="flex-1 p-margin-panel lg:p-10 bg-surface-container-low ribbing overflow-y-auto">
          {/* Master Console Container */}
          <div className="max-w-7xl mx-auto bg-surface border-2 border-outline shadow-xl rounded-lg p-6 lg:p-8 relative">
            {/* Hardware Screws */}
            <div className="screw top-3 left-3"></div>
            <div className="screw top-3 right-3"></div>
            <div className="screw bottom-3 left-3"></div>
            <div className="screw bottom-3 right-3"></div>

            <div className="mb-8 border-outline flex justify-between items-end">
              <div>
                <h2 className="font-headline-md text-headline-md text-primary uppercase">Master Console</h2>
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-secondary shadow-[0_0_8px_rgba(188,0,10,0.6)]"></div>
                <div className="w-4 h-4 rounded-full bg-surface-dim border border-outline"></div>
                <div className="w-4 h-4 rounded-full bg-surface-dim border border-outline"></div>
              </div>
            </div>

            {/* Bento Grid for Modules */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Modules (Raster & Vector) */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Module A: Raster */}
                <div className="bg-surface-container border-2 border-outline inner-shadow-heavy p-5 rounded relative group">
                  <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-2">
                    <h3 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">01 / Images</h3>
                    <span className="material-symbols-outlined text-secondary">image</span>
                  </div>
                  <div className="flex justify-center my-6">
                    {/* Analog Dial Representation */}
                    <div className="w-32 h-32 rounded-full border-4 border-outline bg-surface extruded relative flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border-2 border-outline-variant inner-shadow-sm flex items-center justify-center relative">
                        <div className="absolute w-1 h-12 bg-secondary origin-bottom top-0 transform rotate-45 transition-transform duration-500"></div>
                        <div className="w-4 h-4 rounded-full bg-outline absolute center"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary text-on-primary font-data-mono text-data-mono p-3 rounded-sm text-xs mt-4">
                    <div className="flex justify-between border-b border-surface-tint pb-1 mb-1"><span>CORE_LOAD</span> <span>12%</span></div>
                    <div className="flex justify-between border-b border-surface-tint pb-1 mb-1"><span>MEM_ALLOC</span> <span>4096MB</span></div>
                    <div className="flex justify-between text-secondary-fixed"><span>STATUS</span> <span>READY</span></div>
                  </div>
                </div>

                {/* Module B: Vector */}
                <div className="bg-surface-container border-2 border-outline inner-shadow-heavy p-5 rounded relative group">
                  <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-2">
                    <h3 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">02 / Text</h3>
                    <span className="material-symbols-outlined text-outline">brush</span>
                  </div>
                  <div className="flex justify-center my-6">
                    {/* Waveform Representation */}
                    <div className="w-full h-32 bg-primary inner-shadow-sm border-2 border-outline-variant p-2 flex items-end gap-1 overflow-hidden">
                      <div className="w-1/6 bg-secondary h-1/4"></div>
                      <div className="w-1/6 bg-secondary h-3/4"></div>
                      <div className="w-1/6 bg-secondary h-1/2"></div>
                      <div className="w-1/6 bg-secondary h-full opacity-50"></div>
                      <div className="w-1/6 bg-secondary h-1/3"></div>
                      <div className="w-1/6 bg-secondary h-2/3"></div>
                    </div>
                  </div>
                  <div className="bg-primary text-on-primary font-data-mono text-data-mono p-3 rounded-sm text-xs mt-4">
                    <div className="flex justify-between border-b border-surface-tint pb-1 mb-1"><span>CORE_LOAD</span> <span>45%</span></div>
                    <div className="flex justify-between border-b border-surface-tint pb-1 mb-1"><span>FONT_CACHE</span> <span>128MB</span></div>
                    <div className="flex justify-between text-surface-dim"><span>STATUS</span> <span>IDLE</span></div>
                  </div>
                </div>

                {/* Module C: Graphics */}
                <div className="bg-surface-container border-2 border-outline inner-shadow-heavy p-5 rounded relative group">
                  <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-2">
                    <h3 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">03 / Graphics</h3>
                    <span className="material-symbols-outlined text-outline">blur_on</span>
                  </div>
                  <div className="flex justify-center my-6">
                    <div className="w-full h-24 bg-surface border-2 border-outline flex flex-col justify-around p-2">
                      <div className="h-2 bg-surface-tint w-full rounded-full overflow-hidden"><div className="h-full bg-secondary w-3/4"></div></div>
                      <div className="h-2 bg-surface-tint w-full rounded-full overflow-hidden"><div className="h-full bg-secondary w-1/2"></div></div>
                      <div className="h-2 bg-surface-tint w-full rounded-full overflow-hidden"><div className="h-full bg-secondary w-5/6"></div></div>
                    </div>
                  </div>
                  <div className="bg-primary text-on-primary font-data-mono text-data-mono p-3 rounded-sm text-xs mt-4">
                    <div className="flex justify-between border-b border-surface-tint pb-1 mb-1"><span>SHADER_OPS</span> <span>98K/s</span></div>
                    <div className="flex justify-between text-secondary-fixed"><span>STATUS</span> <span>ACTIVE</span></div>
                  </div>
                </div>

                {/* Module D: Video */}
                <div className="bg-surface-container border-2 border-outline inner-shadow-heavy p-5 rounded relative group opacity-70">
                  <div className="flex justify-between items-start mb-6 border-b border-outline-variant pb-2">
                    <h3 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">04 / Video</h3>
                    <span className="material-symbols-outlined text-outline">movie</span>
                  </div>
                  <div className="flex justify-center my-6 items-center h-24">
                    <div className="font-data-mono text-secondary-fixed-dim uppercase tracking-widest">OFFLINE</div>
                  </div>
                  <div className="bg-primary text-on-primary font-data-mono text-data-mono p-3 rounded-sm text-xs mt-4">
                    <div className="flex justify-between border-b border-surface-tint pb-1 mb-1 text-surface-tint"><span>FRAME_RATE</span> <span>0 FPS</span></div>
                    <div className="flex justify-between text-surface-tint"><span>STATUS</span> <span>STANDBY</span></div>
                  </div>
                </div>
              </div>

              {/* Side Panel: Diagnostics & Logs */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Diagnostics Panel */}
                <div className="bg-surface-container-high border-2 border-outline p-4 rounded h-1/2 flex flex-col">
                  <h4 className="font-label-caps text-label-caps border-b-2 border-outline pb-2 mb-4 uppercase">System Diagnostics</h4>
                  <div className="flex-1 bg-tertiary text-on-tertiary font-data-mono text-[10px] p-2 rounded inner-shadow-sm overflow-y-auto">
                    <p className="text-tertiary-fixed-dim">&gt; INIT HW_SCAN...</p>
                    <p>&gt; CPU: 12 CORE @ 3.4GHz</p>
                    <p>&gt; RAM: 64GB DDR5</p>
                    <p>&gt; GPU: ACCELERATOR_X1</p>
                    <p className="text-secondary-fixed">&gt; WARNING: TEMP @ 78C</p>
                    <p>&gt; NET: LINK_UP 10G</p>
                    <p>&gt; ...</p>
                  </div>
                </div>

                {/* Action Panel */}
                <div className="bg-surface border-2 border-outline p-4 rounded flex-1 flex flex-col justify-center items-center ribbing relative inner-shadow-md">
                  <div className="screw top-2 left-2 w-1.5 h-1.5"></div><div className="screw top-2 right-2 w-1.5 h-1.5"></div>
                  <div className="screw bottom-2 left-2 w-1.5 h-1.5"></div><div className="screw bottom-2 right-2 w-1.5 h-1.5"></div>

                  <button className="w-32 h-32 rounded-full border-4 border-secondary bg-secondary-container text-on-secondary-container extruded hover:bg-secondary active:translate-y-1 transition-all duration-150 flex flex-col items-center justify-center gap-2 group">
                    <span className="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform">power_settings_new</span>
                    <span className="font-label-caps text-label-caps uppercase tracking-widest">MASTER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Index
