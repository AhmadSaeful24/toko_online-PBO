const CardK = () => {
    return (
        <div>
            <div class="flex font-sans border w-[505px]" style={{marginTop: '10px', marginLeft: '130px' }}>
                <div class="flex-none w-48 relative">
                    <img src="https://i.postimg.cc/D0TFRtG0/3a1dd86a-4fd0-466b-a7fe-32570556bc0b-jpg.webp" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
                <form class="flex-auto p-6">
                    <div class="flex flex-wrap">
                        <h1 class="flex-auto text-lg font-semibold text-slate-900">
                            Classic Utility Jacket
                        </h1>
                        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            In stock
                        </div>
                    </div>
                    <div class="flex items-baseline mt-2 mb-6 pb-6">
                        <div class="space-x-2 flex text-sm">
                            <label>
                                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    XS
                                </div>
                            </label>
                            <label>
                                <input class="sr-only peer" name="size" type="radio" value="s" />
                                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    S
                                </div>
                            </label>
                            <label>
                                <input class="sr-only peer" name="size" type="radio" value="m" />
                                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    M
                                </div>
                            </label>
                            <label>
                                <input class="sr-only peer" name="size" type="radio" value="l" />
                                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    L
                                </div>
                            </label>
                            <label>
                                <input class="sr-only peer" name="size" type="radio" value="xl" />
                                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    XL
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="flex space-x-4 mb-6 text-sm font-medium">
                        <div class="flex-auto flex space-x-4">
                            <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                Buy now
                            </button>
                            <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                Add to bag
                            </button>
                        </div>
                    </div>
                    <p class="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                </form>
            </div>
        </div>
    )
}

export default CardK;