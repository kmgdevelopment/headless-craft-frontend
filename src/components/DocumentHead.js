import Link from "next/link";
import Image from "next/image";

export default function DocumentHead() {
    return (
        <header class="global">
            <div class="layout-section">
            <Link href="/" class="logo">
                <Image src="/assets/img/logo.svg" alt="The Crafty Cook logo" width="300" height="57" />
            </Link>
            </div>
        </header>
    )
}